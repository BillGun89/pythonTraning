# Pythonlabbet 98 · 90-talsversionen

En färdig svensk Python-hemsida med en retrodesign inspirerad av Windows 95/98. Alla lektioner och funktioner är kvar.

En färdig svensk Python-hemsida för gymnasieelever och andra nybörjare. Byggd i vanlig HTML, CSS och JavaScript. Du behöver inget konto, ingen databas, inget API-nyckel och ingen byggprocess.

## Design och ändringar

Den nya stilen finns i **`retro98.css`** som läses **efter** den ursprungliga `style.css`. Det är därför lätt att justera designen utan att röra utbildningsmaterialet. `index.html` innehåller de dekorativa fönsterramarna, statusfältet och aktivitetsfältet. Minimerings- och stängningssymbolerna är dekoration, inte riktiga fönsterknappar.

## Det finns på sidan

- 42 stegvisa lektioner i 7 kapitel, från `print()` till projekt.
- 67 sökbara Python-kommandon och små kodexempel.
- En editor där elever kan köra Python och få feedback på övningar.
- Tydliga exempel, korta förklaringar, ledtrådar, lösningsförslag och miniquiz.
- Testinmatning: skriv ett svar per rad för `input()`.
- Framsteg och elevkod sparas **lokalt i webbläsaren** via `localStorage`.
- Ladda ner elevens kod som `.py`-fil för att lämna in i t.ex. Classroom.
- Responsiv layout för dator, surfplatta och telefon.

## Publicera på Cloudflare Pages

1. Packa upp ZIP-filen.
2. Gå till Cloudflare Dashboard → Workers & Pages → Create → Pages → Upload assets / Drag and drop.
3. Ladda upp **mappen `Pythonlabbet_90tal` eller hela innehållet**. `index.html` måste ligga i webbplatsens rot.
4. Publicera. Ingen byggkommando eller framework-inställning behövs.

Om du kopplar GitHub till Pages: välj projektmappen som root och ingen build command. Kontrollera att utgivningskatalogen innehåller `index.html`.

## Kör på din dator

Eftersom Python körs i en Web Worker ska sidan öppnas via en lokal webbserver, inte genom att dubbelklicka på `index.html`:

```bash
cd Pythonlabbet_90tal
python -m http.server 8000
```

Öppna sedan <http://localhost:8000>. Alternativ: VS Code med Live Server.

## Hur körning av Python fungerar

Pythonmotorn är **Pyodide**, som laddas från en versionslåst CDN när eleven trycker "Kör" första gången. Internet krävs första gången och vid behov för att hämta motorn igen. Efter att den laddats exekveras koden i webbläsaren i en separat Web Worker. Vid en oändlig loop avbryts arbetaren efter 8 sekunder och kan startas om vid nästa försök.

- Koden skickas inte till någon egen server av Pythonlabbet.
- Det finns inget användarkonto eller lärarkonto, ingen central lagring och ingen elevöversikt.
- Inmatningsfältet för `input()` används som provsvar, en rad per svar.
- Filövningen använder bara en tillfällig fil i Pyodides virtuella filsystem, inte elevens faktiska hårddisk.
- Python i webbläsaren kan inte alltid göra allt en vanlig Python-installation kan (t.ex. vanlig direktåtkomst till datorns filer, systemkommandon, alla tredjepartsbibliotek).

## Anpassa lektioner

Ändra filen `content.js`. Den innehåller tre listor:

- `modules`: kursens kapitel.
- `lessons`: lektionerna, med `id`, `title`, `concept`, `example`, `challenge`, `starter`, `solution`, `hint`, `test` etc.
- `reference`: kommandobiblioteket.

`test` är ett Python-test som körs efter elevens kod. Testet kan läsa variabler som skapats av eleven, samt två extra värden: `__output__` (utskriften) och `__code__` (elevens källkod). Till exempel:

```python
assert 'Hej' in __output__, 'Skriv ut Hej.'
```

Varje lektion har även ett `input`-fält med färdiga provsvar (tomt om inga behövs).

## Tips för lektioner i klassrummet

Ett förslag på arbetssätt: låt eleven läsa förklaringen, förutsäga vad exemplet kommer skriva, ändra koden, köra och sedan göra övningen. Be eleven förklara muntligt hur koden fungerar. Uppgiften räknas som klar när den automatiska kontrollen godkänns. Själva förståelsen kontrolleras bäst genom samtal och elevens egna ändringar i programmet.

## Versioner och källor

Pyodide v314.0.7, enligt https://pyodide.org/en/stable/usage/quickstart.html (hämtad november 2026).

Python-standarddokumentation: https://docs.python.org/3/tutorial/

## Licens

Du får fritt använda, redigera och sprida Pythonlabbet i din undervisning.
