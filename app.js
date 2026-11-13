/* Pythonlabbet – inga konton, ingen databas. Elevens kod och klara uppgifter sparas i webbläsaren. */
(() => {
  'use strict';
  const DATA = window.PYTHON_LAB_DATA;
  const { modules, lessons, reference } = DATA;
  const byId = new Map(lessons.map(l => [l.id, l]));
  const $ = id => document.getElementById(id);
  const main = $('main');
  const DEFAULT_PLAYGROUND = '# Här får du prova precis vad du vill!\nnamn = "Pythonlabbet"\nprint(f"Hej från {namn}!")';
  const STORE = 'pythonlabbet-v1';
  const getStored = () => { try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch (_) { return {}; } };
  const local = getStored();
  const state = {
    done: new Set(Array.isArray(local.done) ? local.done.filter(id => byId.has(id)) : []),
    codes: local.codes || {},
    inputs: local.inputs || {},
    playgroundCode: local.playgroundCode || DEFAULT_PLAYGROUND,
    playgroundInput: local.playgroundInput || '',
    current: '',
    refGroup: 'Alla',
    refQuery: '',
    showHint: false,
    showSolution: false,
    quizAnswers: {},
    expanded: new Set(['start']),
    runSeq: 0
  };
  const save = () => {
    try { localStorage.setItem(STORE, JSON.stringify({done:[...state.done],codes:state.codes,inputs:state.inputs,playgroundCode:state.playgroundCode,playgroundInput:state.playgroundInput})); }
    catch(e) { /* Privat läge eller fullt minne: sidan fungerar ändå denna session. */ }
  };
  const esc = s => String(s ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
  const rich = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  const nextLesson = () => lessons.find(l => !state.done.has(l.id)) || lessons[lessons.length - 1];
  const modFor = id => modules.find(m => m.id === id);
  const two = n => String(n).padStart(2, '0');
  const lessonIndex = l => lessons.indexOf(l) + 1;
  let toastTimer;
  function toast(message) {
    const el = $('toast'); el.textContent = message;
    el.classList.add('show'); clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }
  function progress() {
    $('progressPercent').textContent = Math.round((state.done.size / lessons.length) * 100) + '%';
    $('progressText').textContent = `${state.done.size} av ${lessons.length} klara`;
    $('progressBar').style.width = ((state.done.size / lessons.length) * 100) + '%';
  }
  function renderSidebar() {
    progress();
    $('lessonNav').innerHTML = modules.map(m => {
      const set = lessons.filter(l => l.module === m.id);
      const done = set.filter(l => state.done.has(l.id)).length;
      const open = state.expanded.has(m.id);
      return `<div class="module-block ${open ? 'open' : ''}" data-mod="${esc(m.id)}">
        <button type="button" class="module-toggle" data-toggle="${esc(m.id)}" aria-expanded="${open}"><span class="mod-symbol" style="background:${m.color}">${esc(m.emoji)}</span><span class="mod-name">${esc(m.name)}</span><span class="mod-count">${done}/${set.length}</span><span class="mod-chevron">⌄</span></button>
        <div class="module-items">${set.map(l => `<a href="#lektion/${encodeURIComponent(l.id)}" class="lesson-link ${state.current === 'lektion/'+l.id ? 'active' : ''}" ${state.current === 'lektion/'+l.id ? 'aria-current="page"' : ''}><span class="lesson-num">${two(lessonIndex(l))}</span><span>${esc(l.title)}</span>${state.done.has(l.id) ? '<span class="done" aria-label="Klar">✓</span>' : ''}</a>`).join('')}</div></div>`;
    }).join('');
    document.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.toggle;
      if (state.expanded.has(id)) state.expanded.delete(id); else state.expanded.add(id);
      renderSidebar();
    }));
    $('lessonNav').querySelectorAll('.lesson-link').forEach(a => a.addEventListener('click', closeMenu));
  }
  function renderTopNav(view) {
    document.querySelectorAll('.topnav a').forEach(a => a.classList.toggle('active', a.dataset.nav === view));
  }
  function go(hash) {
    closeMenu();
    if (location.hash === hash) render(); else location.hash = hash;
  }
  function closeMenu() {
    $('sidebar').classList.remove('open');
    $('sidebarBackdrop').hidden = true;
    $('menuToggle').setAttribute('aria-expanded','false');
  }
  function openMenu() {
    $('sidebar').classList.add('open');
    $('sidebarBackdrop').hidden = false;
    $('menuToggle').setAttribute('aria-expanded','true');
  }
  const chapterCard = (m, i) => {
    const set = lessons.filter(l => l.module === m.id);
    const d = set.filter(l => state.done.has(l.id)).length;
    const target = set.find(l => !state.done.has(l.id)) || set[0];
    return `<a class="chapter-card" href="#lektion/${target.id}"><span class="chapter-icon" style="background:${m.color}">${esc(m.emoji)}</span><div><strong>${esc(m.name.substring(5))}</strong><p>${esc(m.description)}</p><span class="chapter-count">${d} av ${set.length} klara</span></div><span class="chapter-arrow">↗</span></a>`;
  };
  function renderHome() {
    const target = nextLesson();
    const totalMin = lessons.reduce((n,l)=>n+l.minutes,0);
    main.innerHTML = `<div class="content-container">
      <div class="crumb">START <b>·</b> VÄLKOMMEN</div>
      <section class="hero"><div><span class="hero-label">✳ PYTHON FÖR NYBÖRJARE</span><h1>Lär dig Python.<br><em>En sak i taget.</em></h1><p>Inga krångliga förklaringar. Bara tydliga exempel, korta lektioner och kod du får testa direkt. Bygg något eget från första dagen.</p><div class="hero-actions"><a class="btn btn-primary" href="#lektion/${target.id}">${state.done.size ? 'Fortsätt där du var' : 'Börja lära dig'} <span>↗</span></a><a class="btn btn-outline-dark" href="#lekplats">Öppna lekplatsen</a></div></div>
      <div class="hero-terminal" aria-label="Ett enkelt Python-exempel"><div class="terminal-top"><i></i><i></i><i></i><span>mitt_forsta_program.py</span></div><pre><span class="hl-comment"># Det börjar med en rad.</span>\n<span class="hl-key">namn</span> = <span class="hl-string">"du"</span>\n<span class="hl-fn">print</span>(f<span class="hl-string">"Hej {namn}!"</span>)\n\n<span class="hl-comment"># Och plötsligt kan du koda.</span>\n<span class="hl-key">for</span> tal <span class="hl-key">in</span> range(1, 4):\n    <span class="hl-fn">print</span>(<span class="hl-string">"Jag kan det här!"</span>)</pre></div></section>
      <div class="stats-row"><div class="stat-box"><span class="stat-icon">▤</span><div><strong>${lessons.length}</strong><small>Korta lektioner</small></div></div><div class="stat-box"><span class="stat-icon">⌘</span><div><strong>${reference.length}</strong><small>Kommandon</small></div></div><div class="stat-box"><span class="stat-icon">✓</span><div><strong>${state.done.size}</strong><small>Övningar klara</small></div></div></div>
      <div class="section-head"><div><h2>Din väg genom Python</h2><p>Välj ett kapitel eller börja från början. Du bestämmer takten.</p></div><a href="#kommandon">Se alla kommandon ↗</a></div>
      <div class="chapter-grid">${modules.map(chapterCard).join('')}</div>
      <p class="footnote">Din kod och dina framsteg sparas bara i den här webbläsaren. Ingen inloggning behövs. · Python körs i webbläsaren och kräver internet vid första körningen.</p>
    </div>`;
    renderTopNav('start');
  }
  function exampleCode(code) {
    return `<div class="code-example"><div class="code-example-head"><span>EXEMPEL · Python</span><button class="copy-example" type="button">Kopiera kod ↗</button></div><pre><code>${esc(code)}</code></pre></div>`;
  }
  function quizHTML(l) {
    if (!l.quiz) return '';
    const q = l.quiz;
    return `<section class="card quiz-card"><div class="task-label">✦ SNABBKOLL</div><h2>Har du förstått?</h2><p>${esc(q.question)}</p><div class="quiz-choices">${q.choices.map((choice,i)=>`<button class="quiz-choice" type="button" data-answer="${i}"><span>${'ABC'[i]}.</span>${esc(choice)}</button>`).join('')}</div><div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div></section>`;
  }
  function editorHTML(key, initial, inputs, title, isPlayground = false) {
    return `<div class="work-card" id="workCard" data-editor-key="${esc(key)}">
        <div class="task-head">${isPlayground ? '<div class="task-label">✦ DIN EGEN KODYTA</div><h2>Testa din kod</h2><p>Här finns inget rätt eller fel. Prova, ändra och se vad som händer.</p>' : `<div class="task-label">✦ NU ÄR DET DIN TUR</div><h2>Prova själv</h2><p class="rich">${rich(title)}</p>`}</div>
        <div class="editor-bar"><span class="editor-file"><span>Py</span> ${isPlayground ? 'lekplats.py' : 'uppgift.py'}</span><div class="editor-actions"><button type="button" id="copyCode" title="Kopiera koden">Kopiera</button><button type="button" id="downloadCode" title="Spara din kod till datorn">Spara .py</button><button type="button" id="resetCode" title="Återställ originalkoden">Återställ</button></div></div>
        <div class="code-editor-wrap"><pre class="line-numbers" id="lineNumbers" aria-hidden="true">1</pre><textarea class="code-editor" id="codeEditor" aria-label="Skriv din Python-kod här" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off">${esc(initial)}</textarea></div>
        <div class="input-section"><label for="testInput">Testinmatning <span>Ett svar per rad om du använder input()</span></label><textarea id="testInput" class="test-input" rows="2" spellcheck="false" placeholder="T.ex. Kim eller 25">${esc(inputs)}</textarea></div>
        <div class="editor-footer"><button class="btn run-btn" type="button" id="runCode"><span>▶</span> Kör koden</button><span class="editor-hint-text">Ctrl / ⌘ + Enter</span></div>
        <div class="result-area"><div class="result-head">▣ RESULTAT <span id="runStatus">Redo att köra</span></div><pre class="console" id="consoleOutput" aria-live="polite">Här visas det som ditt program skriver ut.</pre><div id="codeFeedback" aria-live="polite"></div></div>
        ${isPlayground ? '' : `<div class="work-help"><div class="help-buttons"><button id="toggleHint" class="text-button" type="button">☼ Visa en ledtråd</button><button id="toggleSolution" class="text-button" type="button">▤ Visa ett lösningsförslag</button></div><div id="hintTarget"></div><div id="solutionTarget"></div></div>`}
    </div>`;
  }
  function renderLesson(l) {
    const m = modFor(l.module), num = lessonIndex(l);
    const code = Object.hasOwn(state.codes,l.id) ? state.codes[l.id] : l.starter;
    const input = Object.hasOwn(state.inputs,l.id) ? state.inputs[l.id] : l.input;
    state.expanded.add(m.id);
    state.showHint = state.showSolution = false;
    const prev = lessons[num-2], next = lessons[num];
    main.innerHTML = `<div class="content-container">
      <div class="crumb"><a href="#start">START</a><b>›</b>${esc(m.name.substring(5)).toUpperCase()}<b>›</b> LEKTION ${two(num)}</div>
      <div class="lesson-header"><h1>${esc(l.title)}</h1><p>${esc(l.summary)}</p><div class="lesson-meta"><span class="pill">◷ ${l.minutes} min</span><span class="pill purple">${esc(m.name.substring(5))}</span>${state.done.has(l.id)?'<span class="pill" id="donePill">✓ Klar</span>':'<span class="pill" id="donePill" hidden>✓ Klar</span>'}</div></div>
      <div class="lesson-grid"><div class="learn-column"><div class="goal-card"><span class="goal-icon">✓</span><div><strong>Efter den här lektionen kan du:</strong><p>${esc(l.goal)}</p></div></div>
      <section class="card"><div class="task-label">01 / FÖRSTÅ</div><h2>Vad betyder det?</h2><p class="rich">${rich(l.concept)}</p><h3>Så ser det ut i Python</h3>${exampleCode(l.example)}<h3>Tre saker att komma ihåg</h3><ol class="steps">${l.walkthrough.map(s=>`<li class="rich">${rich(s)}</li>`).join('')}</ol>${l.tip?`<div class="tip">💡 ${esc(l.tip)}</div>`:''}</section>${quizHTML(l)}</div><div class="work-column">${editorHTML(l.id,code,input,l.challenge)}</div></div>
      <div class="lesson-pagination">${prev?`<a href="#lektion/${prev.id}">← ${esc(prev.title)}</a>`:'<span></span>'}${next?`<a href="#lektion/${next.id}">${esc(next.title)} →</a>`:'<a href="#start">Tillbaka till start ↗</a>'}</div>
      <p class="footnote">Skriv, testa och gör om. Det viktigaste är att du förstår vad din kod gör.</p>
    </div>`;
    renderTopNav('lesson');
    bindEditor(l);
    main.querySelector('.copy-example').addEventListener('click',()=>copyText(l.example));
    if (l.quiz) {
      main.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', ()=> {
        const choice = Number(button.dataset.answer);
        main.querySelectorAll('[data-answer]').forEach(b=> {b.classList.toggle('correct',Number(b.dataset.answer)===l.quiz.answer);b.classList.toggle('wrong',Number(b.dataset.answer)===choice && choice!==l.quiz.answer);});
        $('quizFeedback').textContent = (choice===l.quiz.answer?'✓ Rätt! ':'Inte riktigt — se vilket svar som är rätt. ') + l.quiz.why;
      }));
    }
    $('toggleHint').addEventListener('click',()=>{
      state.showHint=!state.showHint;
      $('hintTarget').innerHTML=state.showHint?`<div class="help-content">${esc(l.hint)}</div>`:'';
      $('toggleHint').textContent=state.showHint?'☼ Dölj ledtråden':'☼ Visa en ledtråd';
    });
    $('toggleSolution').addEventListener('click',()=>{
      state.showSolution=!state.showSolution;
      $('solutionTarget').innerHTML=state.showSolution?`<pre class="solution-block">${esc(l.solution)}</pre><button id="trySolution" class="text-button" type="button">Prova lösningen i editorn ↗</button>`:'';
      $('toggleSolution').textContent=state.showSolution?'▤ Dölj lösningen':'▤ Visa ett lösningsförslag';
      if (state.showSolution) $('trySolution').addEventListener('click',()=>{ const editor=$('codeEditor');editor.value=l.solution;editor.dispatchEvent(new Event('input'));editor.focus(); });
    });
  }
  function renderReference() {
    const groups=['Alla',...new Set(reference.map(r=>r.group))];
    main.innerHTML=`<div class="content-container"><div class="crumb"><a href="#start">START</a><b>›</b> KOMMANDOBIBLIOTEK</div>
      <div class="page-heading"><div class="mini-label">KOLLA UPP NÄR DU FASTNAR</div><h1>Alla viktiga Python-kommandon.</h1><p>Vad var det nu <code>append()</code> gjorde? Här hittar du snabbförklaringar och kod du kan prova. Använd sökrutan för att hitta det du behöver.</p></div>
      <div class="reference-controls"><input id="refSearch" class="ref-search" type="search" aria-label="Sök bland kommandon" placeholder="⌕ Sök ett kommando ..." value="${esc(state.refQuery)}">${groups.map(g=>`<button type="button" class="filter-chip ${state.refGroup===g?'selected':''}" data-group="${esc(g)}">${esc(g)}</button>`).join('')}</div>
      <div id="refCount" class="crumb"></div><div class="ref-grid" id="refGrid"></div><p class="footnote">Kommandona är exempel i Python 3. Vissa funktioner kan vara olika när du kör Python lokalt i VS Code.</p></div>`;
    renderTopNav('reference');
    $('refSearch').addEventListener('input',e=>{state.refQuery=e.target.value;filterRefs();});
    main.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{state.refGroup=b.dataset.group;main.querySelectorAll('[data-group]').forEach(x=>x.classList.toggle('selected',x.dataset.group===state.refGroup));filterRefs();}));
    filterRefs();
  }
  function filterRefs() {
    const q=state.refQuery.trim().toLocaleLowerCase('sv-SE');
    const filtered=reference.filter(r=>(state.refGroup==='Alla'||r.group===state.refGroup)&&(!q||`${r.name} ${r.description} ${r.group} ${r.code}`.toLocaleLowerCase('sv-SE').includes(q)));
    $('refCount').textContent=`VISAR ${filtered.length} AV ${reference.length} KOMMANDON`;
    $('refGrid').innerHTML=filtered.length?filtered.map(r=>`<article class="ref-card"><div class="ref-card-header"><h3>${esc(r.name)}</h3></div><p>${esc(r.description)}</p><pre><code>${esc(r.code)}</code></pre><button type="button" data-ref="${reference.indexOf(r)}">↗ Prova koden</button></article>`).join(''):`<div class="empty-state">Inga kommandon hittades. Försök med ett annat sökord.</div>`;
    $('refGrid').querySelectorAll('[data-ref]').forEach(b=>b.addEventListener('click',()=>{state.playgroundCode=reference[Number(b.dataset.ref)].code;state.playgroundInput='';save();go('#lekplats');}));
  }
  function renderPlayground() {
    main.innerHTML=`<div class="content-container"><div class="crumb"><a href="#start">START</a><b>›</b> LEKPLATS</div><div class="page-heading"><div class="mini-label">FRITT FRAM ATT TESTA</div><h1>Din alldeles egna lekplats.</h1><p>Prova något du är nyfiken på, bygg ett litet spel eller ändra kod från kommandobiblioteket. Det här är din plats att experimentera.</p></div><div class="playground-layout"><div>${editorHTML('playground',state.playgroundCode,state.playgroundInput,'',true)}</div><aside class="playground-info"><div class="task-label">✦ TIPS NÄR DU FASTNAR</div><h2>Börja med något litet</h2><p>Det behöver inte vara perfekt. Testa gärna någon av de här idéerna:</p><ul><li>Skriv ut ditt namn med <code>print()</code>.</li><li>Gör en miniräknare för två tal.</li><li>Skapa en lista med fem favoritfilmer.</li><li>Bygg ett spel som använder <code>random</code>.</li></ul><p>Använder du <code>input()</code>? Lägg ett testsvar på varje rad i rutan Testinmatning.</p><a class="btn btn-secondary" href="#kommandon">Bläddra bland kommandon ↗</a></aside></div><p class="footnote">Dina ändringar sparas automatiskt i den här webbläsaren.</p></div>`;
    renderTopNav('playground');
    bindEditor(null);
  }
  function render() {
    const hash=decodeURIComponent((location.hash||'#start').slice(1));
    if (state.current && hash !== state.current && (activeRun || pendingRun)) {
      resetWorker(); pendingRun = null;
    }
    const match=hash.match(/^lektion\/(.+)$/);
    if (match && byId.has(match[1])) {
      state.current='lektion/'+match[1]; renderLesson(byId.get(match[1]));
    } else if (hash.startsWith('kommandon')) {
      state.current='kommandon';renderReference();
    } else if (hash==='lekplats') {
      state.current='lekplats'; renderPlayground();
    } else {
      state.current='start';renderHome();
    }
    renderSidebar();
    closeMenu();
    window.scrollTo({top:0,behavior:'instant'});
  }
  function copyText(s) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(s).then(()=>toast('Koden är kopierad!')).catch(()=>fallbackCopy(s));
    } else fallbackCopy(s);
  }
  function fallbackCopy(s) {
    const temp=document.createElement('textarea');temp.value=s;temp.style.position='fixed';temp.style.opacity='0';document.body.appendChild(temp);temp.select();
    try {document.execCommand('copy');toast('Koden är kopierad!');}catch(e){toast('Markera koden och kopiera med Ctrl+C.');}
    temp.remove();
  }
  function savePython(code, filename) {
    const blob=new Blob([code+'\n'],{type:'text/x-python;charset=utf-8'});
    const url=URL.createObjectURL(blob); const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),4000);
    toast('Din .py-fil har sparats.');
  }
  function bindEditor(l) {
    const editor=$('codeEditor'), input=$('testInput'), lines=$('lineNumbers');
    const key=l?l.id:'playground';
    const autosave=()=>{
      if(l){state.codes[key]=editor.value;state.inputs[key]=input.value;}
      else{state.playgroundCode=editor.value;state.playgroundInput=input.value;}
      save();
    };
    const updateLines=()=>{lines.textContent=Array.from({length:Math.max(1,editor.value.split('\n').length)},(_,i)=>i+1).join('\n');lines.scrollTop=editor.scrollTop;};
    updateLines();
    editor.addEventListener('input',()=>{updateLines();autosave();});
    editor.addEventListener('scroll',()=>{lines.scrollTop=editor.scrollTop;});
    input.addEventListener('input',autosave);
    editor.addEventListener('keydown',e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();runCode(l);return;}
      if(e.key==='Tab'){
        e.preventDefault();const a=editor.selectionStart,b=editor.selectionEnd;
        if(a!==b && editor.value.slice(a,b).includes('\n')){
          const start=editor.value.lastIndexOf('\n',a-1)+1;const str=editor.value.slice(start,b);const replaced=e.shiftKey?str.replace(/^ {1,4}/gm,''):str.replace(/^/gm,'    ');editor.setRangeText(replaced,start,b,'select');
        }else if(!e.shiftKey){editor.setRangeText('    ',a,b,'end');}
        editor.dispatchEvent(new Event('input'));
      } else if(e.key==='Enter'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
        const before=editor.value.slice(0,editor.selectionStart);const line=before.split('\n').at(-1);const indent=line.match(/^\s*/)[0];
        const extra=line.trimEnd().endsWith(':')?'    ':'';
        if(indent||extra){e.preventDefault();editor.setRangeText('\n'+indent+extra,editor.selectionStart,editor.selectionEnd,'end');editor.dispatchEvent(new Event('input'));}
      }
    });
    $('runCode').addEventListener('click',()=>runCode(l));
    $('resetCode').addEventListener('click',()=>{
      if(!confirm('Vill du återställa koden i editorn? Dina egna ändringar i den här uppgiften försvinner.'))return;
      editor.value=l?l.starter:DEFAULT_PLAYGROUND;
      input.value=l?l.input:'';
      editor.dispatchEvent(new Event('input'));input.dispatchEvent(new Event('input'));
      $('consoleOutput').textContent='Här visas det som ditt program skriver ut.';
      $('consoleOutput').className='console';$('codeFeedback').innerHTML=''; $('runStatus').textContent='Redo att köra';toast('Koden har återställts.');
    });
    $('copyCode').addEventListener('click',()=>copyText(editor.value));
    $('downloadCode').addEventListener('click',()=>savePython(editor.value,l?l.id+'.py':'min_kod.py'));
  }
  let worker=null,workerReady=false,workerFailed=false,loadingTimer=null,runTimer=null,pendingRun=null,activeRun=null;
  function setRunBusy(isBusy,msg) {
    const button=$('runCode'); if(!button)return;
    button.disabled=isBusy;button.innerHTML=isBusy?'<span>◷</span> Kör ...':'<span>▶</span> Kör koden';
    if(msg&&$('runStatus'))$('runStatus').textContent=msg;
  }
  function resetWorker() {
    if(worker)worker.terminate();worker=null;workerReady=false;workerFailed=false;
    clearTimeout(loadingTimer);clearTimeout(runTimer);
    activeRun=null;
  }
  function getWorker() {
    if(worker)return;
    try {
      worker=new Worker('python-worker.js');
      worker.onmessage=handleWorkerMessage;
      worker.onerror=()=>failWorker('Kunde inte starta Python. Kontrollera internetanslutningen och öppna sidan via en webbserver.');
      loadingTimer=setTimeout(()=>{
        if(!workerReady)failWorker('Python kunde inte laddas. Kontrollera internet och prova igen.');
      },30000);
    }catch(e){failWorker('Kunde inte starta Python. Publicera sidan på Cloudflare Pages eller använd en lokal webbserver.');}
  }
  function failWorker(message) {
    resetWorker();workerFailed=true;pendingRun=null;
    setRunBusy(false,'Ej ansluten');
    if($('consoleOutput')) {$('consoleOutput').className='console error';$('consoleOutput').textContent=message;}
    if($('codeFeedback'))$('codeFeedback').innerHTML='';
  }
  function handleWorkerMessage({data}) {
    if(data.type==='init-error'){failWorker('Python-motorn kunde inte laddas: '+data.error);return;}
    if(data.type==='ready'){
      clearTimeout(loadingTimer);workerReady=true;
      if(pendingRun){const p=pendingRun;pendingRun=null;dispatchRun(p);}
      return;
    }
    if(data.type!=='result')return;
    if(!activeRun||data.id!==activeRun.id)return;
    const context=activeRun;activeRun=null;clearTimeout(runTimer);
    if(context.key!==editorKeyOnPage())return;
    setRunBusy(false,data.error?'Fel i koden':'Körning klar');
    const consoleEl=$('consoleOutput');const feedbackEl=$('codeFeedback');
    if(!consoleEl||!feedbackEl)return;
    consoleEl.className='console'+(data.error?' error':data.passed?' success':'');
    consoleEl.textContent=[data.output||'',data.error?('Fel: '+data.error):''].filter(Boolean).join('\n')||'Programmet kördes men skrev inte ut något. Prova print().';
    const clazz=data.error?'bad':data.passed===true?'good':data.passed===false?'try':'';
    const symbol=data.error?'⚠':data.passed===true?'✓':data.passed===false?'↻':'✓';
    feedbackEl.innerHTML=`<div class="feedback ${clazz}"><span>${symbol}</span><span>${esc(data.feedback)}</span></div>`;
    if(data.passed===true && context.key!=='playground' && !state.done.has(context.key)) {
      state.done.add(context.key);save();progress();renderSidebar();
      const pill=$('donePill');if(pill)pill.hidden=false;
      toast('Lektion klar! Bra jobbat.');
    }
  }
  function editorKeyOnPage() {return $('workCard')?.dataset.editorKey || null;}
  function dispatchRun(payload) {
    if(!worker||!workerReady)return;
    activeRun=payload;
    worker.postMessage(payload);
    runTimer=setTimeout(()=>{
      if(activeRun&&activeRun.id===payload.id) failWorker('Körningen tog för lång tid och stoppades. Har du en loop som aldrig tar slut? Rätta koden och försök igen.');
    },8000);
  }
  function runCode(l) {
    const editor=$('codeEditor'),input=$('testInput');if(!editor||!input)return;
    const payload={type:'run',id:++state.runSeq,key:l?l.id:'playground',code:editor.value,inputs:input.value,test:l?l.test:''};
    $('codeFeedback').innerHTML='';$('consoleOutput').className='console';$('consoleOutput').textContent='Kör din Python-kod ...';
    setRunBusy(true,workerReady?'Kör Python':'Laddar Python första gången ...');
    if(!workerReady){pendingRun=payload;if(workerFailed)workerFailed=false;getWorker();}
    else if(!activeRun)dispatchRun(payload);
  }
  function openSearch() {
    $('searchDialog').showModal();$('globalSearch').value='';filterSearch();$('globalSearch').focus();
  }
  function filterSearch() {
    const q=$('globalSearch').value.trim().toLocaleLowerCase('sv-SE');
    const matchesLesson=(q?lessons.filter(l=>`${l.title} ${l.summary} ${l.concept} ${l.goal}`.toLocaleLowerCase('sv-SE').includes(q)):lessons.slice(0,6)).slice(0,9);
    const matchesRef=(q?reference.filter(r=>`${r.name} ${r.description} ${r.group}`.toLocaleLowerCase('sv-SE').includes(q)):reference.slice(0,5)).slice(0,8);
    $('searchResults').innerHTML=`<div class="search-group-title">LEKTIONER</div>${matchesLesson.map(l=>`<button type="button" class="search-result" data-search-lesson="${l.id}"><span class="search-result-icon">▤</span><span><strong>${esc(l.title)}</strong><small>${esc(l.summary)}</small></span><span class="arr">↗</span></button>`).join('')||'<p class="empty-state">Inga lektioner hittades.</p>'}<div class="search-group-title">KOMMANDON</div>${matchesRef.map(r=>`<button type="button" class="search-result" data-search-ref="${reference.indexOf(r)}"><span class="search-result-icon">⌘</span><span><strong>${esc(r.name)}</strong><small>${esc(r.description)}</small></span><span class="arr">↗</span></button>`).join('')||'<p class="empty-state">Inga kommandon hittades.</p>'}`;
    $('searchResults').querySelectorAll('[data-search-lesson]').forEach(b=>b.addEventListener('click',()=>{$('searchDialog').close();go('#lektion/'+b.dataset.searchLesson);}));
    $('searchResults').querySelectorAll('[data-search-ref]').forEach(b=>b.addEventListener('click',()=>{
      state.refGroup='Alla';state.refQuery=reference[Number(b.dataset.searchRef)].name;
      $('searchDialog').close();go('#kommandon');
    }));
  }
  $('menuToggle').addEventListener('click',()=>{$('sidebar').classList.contains('open')?closeMenu():openMenu();});
  $('menuClose').addEventListener('click',closeMenu);
  $('sidebarBackdrop').addEventListener('click',closeMenu);
  $('searchTrigger').addEventListener('click',openSearch);
  $('searchClose').addEventListener('click',()=>$('searchDialog').close());
  $('globalSearch').addEventListener('input',filterSearch);
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k') {e.preventDefault();openSearch();}
  });
  window.addEventListener('hashchange',render);
  render();
})();
