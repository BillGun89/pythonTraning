/* Python körs i en separat Web Worker. En oändlig loop kan stoppas utan att hela sidan låser sig. */
// Pyodide 314 kräver en MODUL-worker (inte klassisk importScripts()).
// Om skolans nätverk blockerar jsDelivr försöker vi med en annan CDN.
const SOURCES = [
  { name: 'jsDelivr', base: 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/' },
  { name: 'UNPKG', base: 'https://unpkg.com/pyodide@314.0.7/' }
];
let pyodide;
(async function initialize() {
  const errors = [];
  for (let i = 0; i < SOURCES.length; i++) {
    const source = SOURCES[i];
    try {
      self.postMessage({
        type: 'loading',
        message: `Laddar Python (${i + 1}/${SOURCES.length}) via ${source.name} ...`
      });
      const { loadPyodide } = await import(source.base + 'pyodide.mjs');
      pyodide = await loadPyodide({ indexURL: source.base });
      self.postMessage({ type: 'ready' });
      return;
    } catch (error) {
      errors.push(`${source.name}: ${String(error && error.message || error)}`);
    }
  }
  self.postMessage({
    type: 'init-error',
    error: 'Kunde inte hämta Python från någon av de två servrarna. ' +
      'Kontrollera skolans nätverksfilter eller prova ett annat nätverk. ' +
      errors.join(' | ')
  });
})();

self.onmessage = async ({data}) => {
  if (data.type !== 'run' || !pyodide) return;
  const {id, code, test, inputs} = data;
  try {
    pyodide.globals.set('__lab_code', String(code));
    pyodide.globals.set('__lab_test', String(test || ''));
    pyodide.globals.set('__lab_inputs', String(inputs || ''));
    const result = await pyodide.runPythonAsync(`
import builtins, contextlib, io, traceback
class __LabOutput(io.StringIO):
    def write(self, value):
        if self.tell() + len(value) > 30000:
            raise RuntimeError("För mycket text. Kontrollera att din loop inte skriver ut oändligt många rader.")
        return super().write(value)
__lab_stdout = __LabOutput()
__lab_lines = iter(__lab_inputs.splitlines())
__lab_original_input = builtins.input

def __lab_input(prompt=""):
    try:
        value = next(__lab_lines)
    except StopIteration:
        raise EOFError("Saknar provsvar. Lägg till en rad i Testinmatning för varje input().")
    print(str(prompt) + value)
    return value

builtins.input = __lab_input
__lab_scope = {"__name__": "__main__"}
__lab_error = None
__lab_passed = None
__lab_feedback = ""
with contextlib.redirect_stdout(__lab_stdout), contextlib.redirect_stderr(__lab_stdout):
    try:
        exec(compile(__lab_code, "<din kod>", "exec"), __lab_scope)
    except BaseException as err:
        __lab_error = "".join(traceback.format_exception_only(type(err), err)).strip()
        if isinstance(err, SyntaxError):
            __lab_feedback = f"Kontrollera rad {err.lineno}. Saknas till exempel : eller )?"
        elif isinstance(err, IndentationError):
            __lab_feedback = "Kolla indragen. Rader under if, for och def behöver oftast fyra mellanslag."
        elif isinstance(err, NameError):
            __lab_feedback = "Kontrollera stavning och att variabeln är skapad före den används."
        elif isinstance(err, EOFError):
            __lab_feedback = str(err)
        else:
            __lab_feedback = "Läs felet och försök rätta en sak i taget."
    else:
        if __lab_test:
            try:
                __lab_scope.update({"__output__": __lab_stdout.getvalue(), "__code__": __lab_code})
                exec(compile(__lab_test, "<kontroll>", "exec"), __lab_scope)
                __lab_passed = True
                __lab_feedback = "Snyggt jobbat! Din kod klarade kontrollen."
            except AssertionError as err:
                __lab_passed = False
                __lab_feedback = str(err) or "Det fungerar, men uppgiften är inte riktigt klar ännu."
            except BaseException:
                __lab_passed = False
                __lab_feedback = "Din kod kördes, men kontrollen kunde inte hitta det förväntade svaret."
        else:
            __lab_feedback = "Koden kördes utan fel."
builtins.input = __lab_original_input
(__lab_stdout.getvalue(), __lab_error, __lab_passed, __lab_feedback)
    `, { dedent: false });
    const values = result.toJs ? result.toJs() : result;
    if (result.destroy) result.destroy();
    self.postMessage({type:'result',id,output:values[0],error:values[1],passed:values[2],feedback:values[3]});
  } catch (e) {
    self.postMessage({type:'result',id,output:'',error:String(e && e.message || e),passed:null,feedback:'Körningen kunde inte slutföras.'});
  }
};
