/* Kursinnehåll på svenska. Ändra och bygg ut fritt. */
window.PYTHON_LAB_DATA = {
  "modules": [
    {
      "id": "start",
      "name": "01 · Kom igång",
      "description": "Första stegen utan krångliga ord",
      "emoji": "✳",
      "color": "#DDF4E8"
    },
    {
      "id": "data",
      "name": "02 · Text och värden",
      "description": "Variabler, siffror och användarens svar",
      "emoji": "✦",
      "color": "#E9E4FF"
    },
    {
      "id": "val",
      "name": "03 · Få datorn att välja",
      "description": "Villkor och logik",
      "emoji": "◇",
      "color": "#FFEBCB"
    },
    {
      "id": "loopar",
      "name": "04 · Upprepa smart",
      "description": "Loopar som sparar tid",
      "emoji": "↻",
      "color": "#D9ECFF"
    },
    {
      "id": "samlingar",
      "name": "05 · Håll ordning på data",
      "description": "Listor, ordböcker och mer",
      "emoji": "▦",
      "color": "#FFE0E8"
    },
    {
      "id": "funktioner",
      "name": "06 · Bygg egna verktyg",
      "description": "Funktioner, fel och moduler",
      "emoji": "⚙",
      "color": "#E5ECDF"
    },
    {
      "id": "projekt",
      "name": "07 · Sätt ihop allt",
      "description": "Små riktiga program",
      "emoji": "★",
      "color": "#FFF1D5"
    }
  ],
  "lessons": [
    {
      "id": "vad-ar-python",
      "module": "start",
      "title": "Vad är Python?",
      "minutes": 4,
      "summary": "Förstå vad en rad kod gör.",
      "goal": "Jag kan förklara vad ett Python-program är.",
      "concept": "Python är ett programmeringsspråk. Du skriver instruktioner och datorn läser dem uppifrån och ned. Du behöver inte kunna allt på en gång — börja med en rad.",
      "example": "print(\"Hej från Python!\")\nprint(\"Jag lär mig programmera.\")",
      "walkthrough": [
        "`print()` visar något på skärmen.",
        "Text måste stå inom citattecken: `\"så här\"`.",
        "Varje rad körs i ordning, från överst till nederst."
      ],
      "challenge": "Skriv ett program som skriver ut **Jag kan Python!** på en egen rad.",
      "starter": "# Skriv din första rad här",
      "solution": "print(\"Jag kan Python!\")",
      "hint": "Använd print och skriv texten inom citattecken.",
      "test": "assert 'Jag kan Python!' in __output__, 'Skriv ut exakt: Jag kan Python!'",
      "input": "",
      "quiz": {
        "question": "Vad gör print()?",
        "choices": [
          "Sparar en fil",
          "Visar text eller värden",
          "Stänger programmet"
        ],
        "answer": 1,
        "why": "print() skickar ett resultat till konsolen."
      },
      "tip": "Det är helt normalt att få fel i början. Ett felmeddelande är en ledtråd, inte ett misslyckande.",
      "tags": []
    },
    {
      "id": "print",
      "module": "start",
      "title": "Skriv ut med print()",
      "minutes": 5,
      "summary": "Text, siffror och flera saker på samma rad.",
      "goal": "Jag kan visa text och siffror med print().",
      "concept": "Det här är ett av de vanligaste kommandona i Python. `print()` kan visa text, tal och flera saker samtidigt.",
      "example": "print(\"God morgon!\")\nprint(2026)\nprint(\"Jag är\", 16, \"år\")",
      "walkthrough": [
        "När du skriver text använder du citattecken.",
        "Siffror behöver inga citattecken.",
        "Ett kommatecken gör ett mellanrum mellan olika delar."
      ],
      "challenge": "Skriv ut **Python är kul** och sedan siffran **100**, på två olika rader.",
      "starter": "# Första raden: text\n# Andra raden: tal",
      "solution": "print(\"Python är kul\")\nprint(100)",
      "hint": "Två print-anrop ger två rader.",
      "test": "lines = __output__.strip().splitlines()\nassert lines == ['Python är kul', '100'], 'Du behöver två rader: Python är kul och 100.'",
      "input": "",
      "quiz": {
        "question": "Vilken rad visar talet 50?",
        "choices": [
          "print(50)",
          "show(50)",
          "print = 50"
        ],
        "answer": 0,
        "why": "print(50) visar talet 50."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "kommentarer",
      "module": "start",
      "title": "Kommentarer med #",
      "minutes": 4,
      "summary": "Skriv anteckningar som Python hoppar över.",
      "goal": "Jag kan förklara min kod med kommentarer.",
      "concept": "Allt efter tecknet `#` på en rad är en kommentar. Den syns i din kod men körs inte.",
      "example": "# Här hälsar programmet\nprint(\"Hej!\")  # Den här raden körs",
      "walkthrough": [
        "Sätt `#` före en anteckning.",
        "Kommentarer gör det lättare att förstå koden senare.",
        "Python ignorerar kommentarerna när programmet körs."
      ],
      "challenge": "Skriv en kommentar som berättar vad ditt program gör. Visa sedan **Välkommen**.",
      "starter": "# Din kommentar här",
      "solution": "# Hälsar användaren välkommen\nprint(\"Välkommen\")",
      "hint": "Kommentaren börjar med #. Sedan använder du print().",
      "test": "assert 'Välkommen' in __output__, 'Glöm inte att skriva ut Välkommen.'\nassert '#' in __code__, 'Lägg till minst en kommentar med #.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "rakna",
      "module": "start",
      "title": "Räkna med Python",
      "minutes": 6,
      "summary": "Låt datorn göra matematiken.",
      "goal": "Jag kan använda +, -, *, / och **.",
      "concept": "Python fungerar också som en miniräknare. `*` betyder gånger, `/` betyder delat med och `**` betyder upphöjt till.",
      "example": "print(8 + 2)   # 10\nprint(8 - 2)   # 6\nprint(8 * 2)   # 16\nprint(8 / 2)   # 4.0\nprint(2 ** 3)  # 8",
      "walkthrough": [
        "`+` plus, `-` minus, `*` gånger.",
        "`/` delat med, `//` heltalsdivision, `%` resten.",
        "Använd parenteser för att styra ordningen."
      ],
      "challenge": "Visa resultatet av **12 × 5** och **20 − 7** på varsin rad.",
      "starter": "print(12 * 5)\n# Skriv den andra beräkningen",
      "solution": "print(12 * 5)\nprint(20 - 7)",
      "hint": "Andra raden ska använda minus-tecknet.",
      "test": "assert __output__.strip().splitlines() == ['60','13'], 'Första raden ska visa 60, andra 13.'",
      "input": "",
      "quiz": {
        "question": "Vilken symbol betyder multiplikation?",
        "choices": [
          "x",
          "*",
          "**"
        ],
        "answer": 1,
        "why": "I Python använder vi * för multiplikation."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "syntaxfel",
      "module": "start",
      "title": "Förstå felmeddelanden",
      "minutes": 6,
      "summary": "Hitta och rätta vanliga misstag.",
      "goal": "Jag vågar prova när koden inte fungerar.",
      "concept": "Alla får felmeddelanden. Python berättar ofta vilken rad som har problem. Kontrollera först citattecken, parenteser och stavning.",
      "example": "# Detta fungerar:\nprint(\"Hej!\")\n\n# Detta ger ett fel (ta bort # för att testa):\n# print(\"Hej!",
      "walkthrough": [
        "`SyntaxError`: Python kan inte läsa koden.",
        "`NameError`: ett namn saknas eller är felstavat.",
        "`TypeError`: du försöker kombinera typer på fel sätt."
      ],
      "challenge": "Rätta koden så den skriver ut **Nu fungerar det!**.",
      "starter": "print(\"Nu fungerar det!",
      "solution": "print(\"Nu fungerar det!\")",
      "hint": "Titta på slutet av raden. Saknas ett citattecken eller en parentes?",
      "test": "assert 'Nu fungerar det!' in __output__, 'Rätta raden så att den kan köras och visa rätt text.'",
      "input": "",
      "quiz": null,
      "tip": "Kopiera gärna felmeddelandet till en anteckning. Försök beskriva med egna ord vad som är fel.",
      "tags": []
    },
    {
      "id": "variabler",
      "module": "start",
      "title": "Spara i variabler",
      "minutes": 7,
      "summary": "Ge saker ett namn och använd dem igen.",
      "goal": "Jag kan skapa och ändra en variabel.",
      "concept": "En variabel är som en låda med etikett. Du kan lägga ett värde i lådan och använda namnet senare. `=` betyder här \"spara värdet\".",
      "example": "namn = \"Alex\"\nalder = 17\nprint(namn)\nprint(alder)\n\nalder = 18\nprint(alder)",
      "walkthrough": [
        "Skriv namnet, sedan `=`, sedan värdet.",
        "Variabelnamn kan inte innehålla mellanslag.",
        "När du tilldelar ett nytt värde byts det gamla ut."
      ],
      "challenge": "Skapa variabeln `poang` med värdet **10**. Ändra den sedan till **15** och skriv ut den.",
      "starter": "poang = 10\n# Ändra värdet här\n# Skriv ut det nya värdet",
      "solution": "poang = 10\npoang = 15\nprint(poang)",
      "hint": "Tilldela samma namn igen: poang = 15.",
      "test": "assert poang == 15, 'Variabeln poang ska vara 15.'\nassert '15' in __output__, 'Glöm inte print(poang).'",
      "input": "",
      "quiz": {
        "question": "Vad betyder = när man skapar en variabel?",
        "choices": [
          "Är lika med (jämförelse)",
          "Spara ett värde",
          "Ta bort en variabel"
        ],
        "answer": 1,
        "why": "Med = tilldelar du ett värde. För att jämföra använder du ==."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "typer",
      "module": "data",
      "title": "Text, heltal och decimaltal",
      "minutes": 7,
      "summary": "Lär känna str, int och float.",
      "goal": "Jag kan skilja på text och tal.",
      "concept": "Python lagrar olika typer av värden. `str` är text, `int` är heltal och `float` är decimaltal. Det påverkar vad du kan göra med dem.",
      "example": "namn = \"Sam\"     # str (text)\nantal = 4         # int (heltal)\npris = 19.5      # float (decimaltal)\nprint(type(namn))\nprint(type(pris))",
      "walkthrough": [
        "Text måste stå i citattecken.",
        "`4` är ett heltal, medan `4.0` är ett decimaltal.",
        "`type()` visar vilken typ ett värde har."
      ],
      "challenge": "Skapa `pris = 29.5` och `antal = 3`. Skriv ut produkten av dem.",
      "starter": "pris = 29.5\nantal = 3\n# Totalpris?",
      "solution": "pris = 29.5\nantal = 3\nprint(pris * antal)",
      "hint": "Multiplicera variablerna med *.",
      "test": "assert pris == 29.5 and antal == 3, 'Kontrollera priser och antal.'\nassert '88.5' in __output__, 'Skriv ut pris * antal. Svaret är 88.5.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "strangar",
      "module": "data",
      "title": "Bygg text med strängar",
      "minutes": 7,
      "summary": "Slå ihop ord och hitta längden.",
      "goal": "Jag kan arbeta med vanlig text.",
      "concept": "I Python kallas text för en sträng (string). Du kan slå ihop två strängar med `+`, eller få längden med `len()`.",
      "example": "fornamn = \"Mira\"\nefternamn = \"Ali\"\nhelt = fornamn + \" \" + efternamn\nprint(helt)\nprint(len(helt))",
      "walkthrough": [
        "`+` mellan två texter sätter ihop dem.",
        "Ett mellanslag kan vara en egen sträng: `\" \"`.",
        "`len()` räknar antalet tecken inklusive mellanslag."
      ],
      "challenge": "Skapa variabeln `ord = \"Python\"`. Skriv ut ordet och sedan hur många tecken det innehåller.",
      "starter": "ord = \"Python\"\n# Skriv ordet och dess längd",
      "solution": "ord = \"Python\"\nprint(ord)\nprint(len(ord))",
      "hint": "Använd print(ord) och print(len(ord)).",
      "test": "assert ord == 'Python', 'Variabeln ska heta ord och innehålla Python.'\nassert __output__.strip().splitlines() == ['Python','6'], 'Visa Python och 6 på varsin rad.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "fstrangar",
      "module": "data",
      "title": "Text + variabler med f-strängar",
      "minutes": 6,
      "summary": "Skriv läsbara meddelanden.",
      "goal": "Jag kan skriva in variabler inuti en mening.",
      "concept": "En f-sträng är enkel när du vill blanda text och variabler. Sätt `f` före citattecknet och skriv variabeln inom `{}`.",
      "example": "namn = \"Lea\"\nalder = 16\nprint(f\"Hej {namn}!\")\nprint(f\"Du är {alder} år.\")",
      "walkthrough": [
        "Det lilla `f` är viktigt.",
        "Sätt variabelnamnet mellan `{` och `}`.",
        "Du kan också skriva uträkningar: `f\"{2 + 3}\"`."
      ],
      "challenge": "Skapa `stad = \"Borås\"` och skriv ut **Jag bor i Borås** med en f-sträng.",
      "starter": "stad = \"Borås\"\n# Använd f\"...{stad}...\"",
      "solution": "stad = \"Borås\"\nprint(f\"Jag bor i {stad}\")",
      "hint": "Sätt f före citattecknen och {stad} inne i texten.",
      "test": "assert stad == 'Borås', 'Variabeln stad ska innehålla Borås.'\nassert 'Jag bor i Borås' in __output__, 'Skriv ut meningen Jag bor i Borås.'\nassert 'f\"' in __code__ or \"f'\" in __code__, 'Försök använda en f-sträng.'",
      "input": "",
      "quiz": {
        "question": "Vad behöver du för att sätta in en variabel i f-sträng?",
        "choices": [
          "f och {variabel}",
          "print och #",
          "bara vanliga citattecken"
        ],
        "answer": 0,
        "why": "Exempel: f\"Hej {namn}\"."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "input",
      "module": "data",
      "title": "Fråga användaren med input()",
      "minutes": 8,
      "summary": "Gör ditt program interaktivt.",
      "goal": "Jag kan ta emot ett svar från användaren.",
      "concept": "`input()` ber användaren skriva något. I Pythonlabbet skriver du provsvar i rutan \"Testinmatning\". Varje rad där motsvarar ett svar.",
      "example": "namn = input(\"Vad heter du? \")\nprint(f\"Hej {namn}!\")",
      "walkthrough": [
        "Skriv en fråga i `input(\"...\")`.",
        "Svaret lagras oftast i en variabel.",
        "`input()` ger alltid text, även om användaren skriver siffror."
      ],
      "challenge": "Fråga efter namnet och skriv ut **Välkommen, Kim!** när svaret är Kim.",
      "starter": "# Fråga efter namn\n# Hälsa på användaren",
      "solution": "namn = input(\"Vad heter du? \")\nprint(f\"Välkommen, {namn}!\")",
      "hint": "Använd input() och en f-sträng.",
      "test": "assert 'Välkommen, Kim!' in __output__, 'Med provsvaret Kim ska programmet skriva Välkommen, Kim!'",
      "input": "Kim",
      "quiz": {
        "question": "Vilken typ får man från input()?",
        "choices": [
          "Alltid text (str)",
          "Alltid ett heltal",
          "Alltid True eller False"
        ],
        "answer": 0,
        "why": "Även 25 kommer som text. Använd int() om du behöver räkna."
      },
      "tip": "Testinmatning ersätter terminalens tangentbord i webbläsaren. Ett svar per rad.",
      "tags": []
    },
    {
      "id": "konvertera",
      "module": "data",
      "title": "Gör text till tal",
      "minutes": 8,
      "summary": "Använd int(), float() och str().",
      "goal": "Jag kan räkna med siffror som användaren skriver.",
      "concept": "Om `input()` ger text kan du inte räkna direkt som med ett tal. Använd `int()` för heltal eller `float()` för decimaltal.",
      "example": "alder_text = input(\"Hur gammal är du? \")\nalder = int(alder_text)\nprint(alder + 1)",
      "walkthrough": [
        "`int(\"12\")` blir heltalet 12.",
        "`float(\"3.5\")` blir decimaltalet 3.5.",
        "`str(12)` blir texten \"12\"."
      ],
      "challenge": "Fråga användaren efter ett heltal och skriv ut talet **plus 10**. Provsvar: 7, så resultatet ska bli 17.",
      "starter": "svar = input(\"Skriv ett tal: \")\n# Gör om till int och lägg till 10",
      "solution": "svar = input(\"Skriv ett tal: \")\ntal = int(svar)\nprint(tal + 10)",
      "hint": "Gör först om svar med int(svar).",
      "test": "assert '17' in __output__.splitlines()[-1], 'Om användaren skriver 7 ska resultatet bli 17.'",
      "input": "7",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "bool",
      "module": "val",
      "title": "Sant eller falskt",
      "minutes": 6,
      "summary": "Lär dig True, False och jämförelser.",
      "goal": "Jag kan jämföra två värden.",
      "concept": "En boolean har bara två värden: `True` eller `False`. Det är grunden för att programmet ska fatta beslut.",
      "example": "print(5 > 3)    # True\nprint(5 == 3)   # False\nprint(5 != 3)   # True\nprint(5 >= 5)   # True",
      "walkthrough": [
        "`==` jämför om två saker är lika.",
        "`!=` betyder inte lika.",
        "`>`, `<`, `>=` och `<=` jämför storlek."
      ],
      "challenge": "Skapa variabeln `temperatur = 22`. Skriv ut om den är högre än 20.",
      "starter": "temperatur = 22\n# Jämför här",
      "solution": "temperatur = 22\nprint(temperatur > 20)",
      "hint": "Skriv print(temperatur > 20).",
      "test": "assert temperatur == 22, 'Temperaturen ska vara 22.'\nassert __output__.strip() == 'True', 'Visa jämförelsens resultat: True.'",
      "input": "",
      "quiz": {
        "question": "Hur jämför du om a och b är lika?",
        "choices": [
          "a = b",
          "a == b",
          "a != b"
        ],
        "answer": 1,
        "why": "== jämför medan = tilldelar ett värde."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "if",
      "module": "val",
      "title": "Ta beslut med if",
      "minutes": 8,
      "summary": "Kör kod bara när något är sant.",
      "goal": "Jag kan använda if och indrag.",
      "concept": "`if` betyder \"om\". Om villkoret är sant kör Python raderna under. Lägg märke till kolon `:` och indrag (fyra mellanslag).",
      "example": "alder = 19\nif alder >= 18:\n    print(\"Du är myndig\")\n\nprint(\"Programmet är klart\")",
      "walkthrough": [
        "Skriv `if` + villkor + `:`.",
        "Rader inne i if-blocket måste ha indrag.",
        "När villkoret är falskt hoppar Python över blocket."
      ],
      "challenge": "Skapa `poang = 80`. Om poängen är minst 50 ska programmet skriva **Godkänt**.",
      "starter": "poang = 80\n# Skriv if-villkoret",
      "solution": "poang = 80\nif poang >= 50:\n    print(\"Godkänt\")",
      "hint": "Tänk: if poang >= 50: och indragen print-rad.",
      "test": "assert poang == 80, 'Skapa variabeln poang med värdet 80.'\nassert 'Godkänt' in __output__, 'Om poäng är minst 50 ska Godkänt visas.'",
      "input": "",
      "quiz": {
        "question": "Vad är viktigt efter if-villkoret?",
        "choices": [
          "Ett semikolon",
          "Ett kolon och indrag",
          "En parentes runt all kod"
        ],
        "answer": 1,
        "why": "Efter if-villkoret kommer : och raderna i blocket indenteras."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "else",
      "module": "val",
      "title": "Annars: else och elif",
      "minutes": 8,
      "summary": "Välj mellan flera alternativ.",
      "goal": "Jag kan göra olika saker beroende på ett värde.",
      "concept": "`else` betyder annars. `elif` betyder ungefär \"annars om\". Python väljer den första grenen som stämmer.",
      "example": "poang = 72\nif poang >= 90:\n    print(\"A\")\nelif poang >= 50:\n    print(\"Godkänt\")\nelse:\n    print(\"Försök igen\")",
      "walkthrough": [
        "Börja med `if`.",
        "Lägg till valfritt antal `elif`.",
        "Avsluta med `else` om du vill fånga resten."
      ],
      "challenge": "Använd `temperatur = 5`. Skriv **Kallt** om temperaturen är under 10, annars **Varmt**.",
      "starter": "temperatur = 5\n# Skriv if och else",
      "solution": "temperatur = 5\nif temperatur < 10:\n    print(\"Kallt\")\nelse:\n    print(\"Varmt\")",
      "hint": "Du behöver två indragna print-rader, en för varje alternativ.",
      "test": "assert 'Kallt' in __output__ and 'Varmt' not in __output__, 'När temperaturen är 5 ska bara Kallt visas.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "logik",
      "module": "val",
      "title": "Flera villkor: and, or, not",
      "minutes": 8,
      "summary": "Kombinera regler.",
      "goal": "Jag kan använda and och or.",
      "concept": "Ibland krävs två saker samtidigt. `and` betyder att båda villkoren måste vara sanna. `or` betyder att minst ett villkor räcker.",
      "example": "alder = 17\nhar_biljett = True\nif alder < 18 and har_biljett:\n    print(\"Ungdom med biljett\")\n\nprint(not False)  # True",
      "walkthrough": [
        "`and`: båda villkoren.",
        "`or`: minst ett villkor.",
        "`not`: vänder på True eller False."
      ],
      "challenge": "Skapa `alder = 16` och `medlem = True`. Om personen är under 18 **eller** medlem, skriv **Rabatt**.",
      "starter": "alder = 16\nmedlem = True\n# Använd or",
      "solution": "alder = 16\nmedlem = True\nif alder < 18 or medlem:\n    print(\"Rabatt\")",
      "hint": "Skriv if alder < 18 or medlem:",
      "test": "assert 'Rabatt' in __output__, 'Programmet ska ge Rabatt.'\nassert ' or ' in __code__, 'Använd or för att kombinera reglerna.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "for",
      "module": "loopar",
      "title": "Upprepa med for",
      "minutes": 8,
      "summary": "Gör samma sak flera gånger.",
      "goal": "Jag kan skriva en for-loop.",
      "concept": "En loop upprepar kod. Med `for` går Python igenom en samling saker en i taget.",
      "example": "namn = [\"Alex\", \"Kim\", \"Sara\"]\nfor person in namn:\n    print(f\"Hej {person}!\")",
      "walkthrough": [
        "`for` betyder ungefär \"för varje\".",
        "Variabeln `person` ändras automatiskt varje varv.",
        "Koden inne i loopen behöver indrag."
      ],
      "challenge": "Skriv ut **Hej** tre gånger med `for` och en lista med tre bokstäver.",
      "starter": "for bokstav in [\"a\", \"b\", \"c\"]:\n    # Skriv något här\n    pass",
      "solution": "for bokstav in [\"a\", \"b\", \"c\"]:\n    print(\"Hej\")",
      "hint": "Byt ut pass mot print(\"Hej\").",
      "test": "assert __output__.strip().splitlines() == ['Hej']*3, 'Hej ska skrivas på exakt tre rader.'",
      "input": "",
      "quiz": {
        "question": "Vad gör for-loopen?",
        "choices": [
          "Kör alltid en gång",
          "Går igenom flera värden",
          "Avslutar programmet"
        ],
        "answer": 1,
        "why": "for går igenom varje värde i en samling."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "range",
      "module": "loopar",
      "title": "Räkna med range()",
      "minutes": 7,
      "summary": "Upprepa ett visst antal gånger.",
      "goal": "Jag kan använda range() i en loop.",
      "concept": "`range()` skapar en följd av heltal. `range(5)` ger 0, 1, 2, 3, 4 — den slutar innan 5.",
      "example": "for nummer in range(5):\n    print(nummer)\n\nfor nummer in range(1, 4):\n    print(\"Tal:\", nummer)",
      "walkthrough": [
        "`range(5)` börjar på 0.",
        "`range(1, 6)` ger 1 till 5.",
        "`range(2, 11, 2)` ger 2, 4, 6, 8, 10."
      ],
      "challenge": "Använd range för att skriva ut talen **1 till 5** på varsin rad.",
      "starter": "for tal in range(  ):\n    print(tal)",
      "solution": "for tal in range(1, 6):\n    print(tal)",
      "hint": "range(start, stopp) tar inte med stoppvärdet.",
      "test": "assert __output__.strip().splitlines() == ['1','2','3','4','5'], 'Du ska få fem rader: 1, 2, 3, 4, 5.'",
      "input": "",
      "quiz": {
        "question": "Vilket sista tal ger range(4)?",
        "choices": [
          "3",
          "4",
          "5"
        ],
        "answer": 0,
        "why": "range(4) ger 0, 1, 2 och 3."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "while",
      "module": "loopar",
      "title": "Upprepa med while",
      "minutes": 8,
      "summary": "Fortsätt så länge något är sant.",
      "goal": "Jag kan skriva en while-loop som tar slut.",
      "concept": "`while` upprepar ett kodblock så länge villkoret är sant. Kom ihåg att ändra något i loopen så den faktiskt slutar.",
      "example": "raknare = 1\nwhile raknare <= 3:\n    print(raknare)\n    raknare += 1",
      "walkthrough": [
        "Sätt ett startvärde före loopen.",
        "Skriv ett villkor efter `while`.",
        "Ändra räknaren inne i loopen, till exempel `+= 1`."
      ],
      "challenge": "Använd while för att skriva ut **3, 2, 1** på egna rader.",
      "starter": "tal = 3\nwhile tal > 0:\n    # Vad ska hända?\n    break",
      "solution": "tal = 3\nwhile tal > 0:\n    print(tal)\n    tal -= 1",
      "hint": "Skriv ut talet och minska det sedan med 1.",
      "test": "assert __output__.strip().splitlines() == ['3','2','1'], 'Loopen ska skriva ut 3, 2, 1.'",
      "input": "",
      "quiz": null,
      "tip": "Om du råkar skapa en oändlig loop stoppar Pythonlabbet körningen efter några sekunder. Du kan sedan rätta koden.",
      "tags": []
    },
    {
      "id": "break",
      "module": "loopar",
      "title": "Stoppa eller hoppa över",
      "minutes": 7,
      "summary": "Lär dig break och continue.",
      "goal": "Jag kan styra en loop.",
      "concept": "`break` stoppar en loop helt. `continue` hoppar direkt till nästa varv. Använd dem när du behöver göra undantag.",
      "example": "for nummer in range(1, 7):\n    if nummer == 4:\n        break\n    print(nummer)\n\nfor n in range(1, 4):\n    if n == 2:\n        continue\n    print(n)",
      "walkthrough": [
        "`break` avbryter hela loopen.",
        "`continue` hoppar över resten av just det varvet.",
        "Båda används inne i en loop."
      ],
      "challenge": "Skriv ut talen 1 till 5 men **hoppa över 3** med `continue`.",
      "starter": "for tal in range(1, 6):\n    # Hoppa över talet 3\n    print(tal)",
      "solution": "for tal in range(1, 6):\n    if tal == 3:\n        continue\n    print(tal)",
      "hint": "Skriv if tal == 3: och continue med ett extra indrag.",
      "test": "assert __output__.strip().splitlines() == ['1','2','4','5'], 'Resultatet ska vara 1, 2, 4, 5.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "loop-matematik",
      "module": "loopar",
      "title": "Räkna ihop värden",
      "minutes": 8,
      "summary": "Summera med en loop.",
      "goal": "Jag kan använda en ackumulator.",
      "concept": "När du vill räkna ihop många tal kan du börja på 0 och lägga till ett tal i taget. Det kallas ofta en ackumulator.",
      "example": "summa = 0\nfor tal in range(1, 5):\n    summa += tal\nprint(summa)  # 10",
      "walkthrough": [
        "Skapa variabeln `summa = 0`.",
        "Uppdatera med `summa += tal` för varje varv.",
        "Visa summan efter loopen, utan indrag."
      ],
      "challenge": "Räkna ihop talen **1 till 10** med en for-loop. Skriv ut summan.",
      "starter": "summa = 0\n# Skriv din loop här\nprint(summa)",
      "solution": "summa = 0\nfor tal in range(1, 11):\n    summa += tal\nprint(summa)",
      "hint": "Låt range gå från 1 till 11. Använd +=.",
      "test": "assert summa == 55, 'Summan av 1 till 10 ska bli 55.'\nassert '55' in __output__.splitlines()[-1], 'Visa summan 55.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "listor",
      "module": "samlingar",
      "title": "Listor med []",
      "minutes": 8,
      "summary": "Spara flera värden på ett ställe.",
      "goal": "Jag kan skapa en lista och hämta en sak ur den.",
      "concept": "En lista samlar flera värden. Varje plats har ett index. Python börjar räkna från **0**, inte 1.",
      "example": "frukter = [\"äpple\", \"banan\", \"päron\"]\nprint(frukter[0])  # äpple\nprint(frukter[-1]) # päron\nprint(len(frukter))",
      "walkthrough": [
        "Skriv värden inom hakparenteser `[]`.",
        "Första platsen är `[0]`, andra `[1]`.",
        "`[-1]` ger sista värdet."
      ],
      "challenge": "Skapa listan `farger = [\"röd\", \"blå\", \"grön\"]` och skriv ut **blå** med index.",
      "starter": "farger = [\"röd\", \"blå\", \"grön\"]\n# Visa den andra färgen",
      "solution": "farger = [\"röd\", \"blå\", \"grön\"]\nprint(farger[1])",
      "hint": "För andra platsen använder du index 1.",
      "test": "assert farger == ['röd','blå','grön'], 'Listan behöver tre färger i rätt ordning.'\nassert __output__.strip() == 'blå', 'Visa bara blå.'",
      "input": "",
      "quiz": {
        "question": "Vilket index ger första värdet?",
        "choices": [
          "1",
          "0",
          "-2"
        ],
        "answer": 1,
        "why": "Python börjar räkna från 0."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "andralista",
      "module": "samlingar",
      "title": "Ändra en lista",
      "minutes": 8,
      "summary": "Lägg till, ta bort och sortera.",
      "goal": "Jag kan använda append(), remove() och sort().",
      "concept": "Listor kan förändras när programmet körs. Du kan lägga till nya saker med `.append()` och ta bort med `.remove()`.",
      "example": "djur = [\"katt\", \"hund\"]\ndjur.append(\"kanin\")\ndjur.remove(\"katt\")\ndjur.sort()\nprint(djur)",
      "walkthrough": [
        "`lista.append(x)` lägger till sist.",
        "`lista.remove(x)` tar bort första matchande värdet.",
        "`lista.sort()` sorterar själva listan."
      ],
      "challenge": "Skapa `tal = [3, 1]`. Lägg till **2**, sortera listan och skriv ut den.",
      "starter": "tal = [3, 1]\n# Lägg till 2\n# Sortera\nprint(tal)",
      "solution": "tal = [3, 1]\ntal.append(2)\ntal.sort()\nprint(tal)",
      "hint": "Använd tal.append(2) och tal.sort().",
      "test": "assert tal == [1,2,3], 'Listan ska vara sorterad: [1, 2, 3].'\nassert '[1, 2, 3]' in __output__, 'Skriv ut listan med print(tal).'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "listloop",
      "module": "samlingar",
      "title": "Loopar genom listor",
      "minutes": 7,
      "summary": "Kombinera två saker du redan kan.",
      "goal": "Jag kan använda for med en lista.",
      "concept": "Listor och loopar hör ihop. Du kan göra samma sak för varje värde utan att skriva en rad för varje person.",
      "example": "namn = [\"Noah\", \"Amina\", \"Elsa\"]\nfor person in namn:\n    print(f\"Välkommen {person}\")",
      "walkthrough": [
        "Skapa listan först.",
        "Gå igenom den med `for sak in lista:`.",
        "Använd den tillfälliga variabeln inne i loopen."
      ],
      "challenge": "Skriv ut **Tack Ali** och **Tack Lea** med en loop över listan `namn`.",
      "starter": "namn = [\"Ali\", \"Lea\"]\n# Använd en for-loop",
      "solution": "namn = [\"Ali\", \"Lea\"]\nfor person in namn:\n    print(f\"Tack {person}\")",
      "hint": "Använd en f-sträng inne i loopen.",
      "test": "assert __output__.strip().splitlines() == ['Tack Ali','Tack Lea'], 'Skriv Tack Ali och Tack Lea på varsin rad.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "dictionary",
      "module": "samlingar",
      "title": "Ordböcker med {}",
      "minutes": 9,
      "summary": "Spara värden med tydliga nycklar.",
      "goal": "Jag kan skapa och läsa en dictionary.",
      "concept": "En dictionary (ordbok) kopplar en **nyckel** till ett **värde**. Bra när du vill spara t.ex. namn, ålder och stad för en person.",
      "example": "person = {\"namn\": \"Leo\", \"alder\": 17}\nprint(person[\"namn\"])\nperson[\"stad\"] = \"Borås\"\nprint(person)",
      "walkthrough": [
        "Skriv nyckel: värde inom `{}`.",
        "Läs ett värde med `ordbok[\"nyckel\"]`.",
        "Du kan lägga till eller ändra med `ordbok[\"nyckel\"] = värde`."
      ],
      "challenge": "Skapa en dictionary `bil` med `marke` = **Volvo** och `ar` = **2024**. Visa märket.",
      "starter": "bil = {\n    # två nycklar här\n}\n# Visa märket",
      "solution": "bil = {\"marke\": \"Volvo\", \"ar\": 2024}\nprint(bil[\"marke\"])",
      "hint": "Skriv \"marke\": \"Volvo\" mellan klamrarna.",
      "test": "assert bil['marke'] == 'Volvo' and bil['ar'] == 2024, 'Bilen ska innehålla marke och ar med rätt värden.'\nassert 'Volvo' in __output__, 'Skriv ut bil[\"marke\"].'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "dictloop",
      "module": "samlingar",
      "title": "Gå igenom en ordbok",
      "minutes": 7,
      "summary": "Använd keys(), values() och items().",
      "goal": "Jag kan läsa alla nycklar och värden.",
      "concept": "Om en dictionary innehåller mycket information kan du gå igenom allt med en loop. `.items()` ger både nyckeln och värdet.",
      "example": "poang = {\"Alex\": 10, \"Kim\": 15}\nfor namn, varde in poang.items():\n    print(f\"{namn}: {varde}\")",
      "walkthrough": [
        "`.keys()` ger nycklarna.",
        "`.values()` ger värdena.",
        "`.items()` ger både nyckel och värde."
      ],
      "challenge": "Skriv ut båda varorna och priserna från `priser`, en per rad, med texten **Äpple kostar 10** osv.",
      "starter": "priser = {\"Äpple\": 10, \"Päron\": 15}\n# Använd .items() här",
      "solution": "priser = {\"Äpple\": 10, \"Päron\": 15}\nfor vara, pris in priser.items():\n    print(f\"{vara} kostar {pris}\")",
      "hint": "for vara, pris in priser.items():",
      "test": "assert 'Äpple kostar 10' in __output__, 'Skriv ut Äpple kostar 10.'\nassert 'Päron kostar 15' in __output__, 'Skriv ut Päron kostar 15.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "tuples",
      "module": "samlingar",
      "title": "Tuples och sets",
      "minutes": 7,
      "summary": "Två andra sätt att samla data.",
      "goal": "Jag känner till tuple och set.",
      "concept": "En **tuple** liknar en lista men kan inte ändras efter att den skapats. Ett **set** sparar unika värden utan garanterad ordning.",
      "example": "koordinat = (10, 20)\nprint(koordinat[0])\n\nnummer = {1, 2, 2, 3}\nprint(len(nummer))  # 3",
      "walkthrough": [
        "Tuple skrivs ofta med `()` och kan inte ändras.",
        "Set skrivs med `{}` och tar bort dubbletter.",
        "Välj lista för en ordnad samling du vill ändra."
      ],
      "challenge": "Skapa ett set av talen `1, 1, 2, 3, 3` och skriv ut antalet **unika** värden.",
      "starter": "tal = {1, 1, 2, 3, 3}\n# Skriv ut antal unika",
      "solution": "tal = {1, 1, 2, 3, 3}\nprint(len(tal))",
      "hint": "len(tal) räknar antalet värden i setet.",
      "test": "assert len(tal) == 3, 'Setet ska innehålla tre unika värden.'\nassert '3' in __output__, 'Visa antalet: 3.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "strangmetoder",
      "module": "samlingar",
      "title": "Smarta textkommandon",
      "minutes": 7,
      "summary": "Ändra små och stora bokstäver.",
      "goal": "Jag kan använda upper(), lower() och strip().",
      "concept": "Text har färdiga metoder. Du kan göra text till versaler med `.upper()`, gemener med `.lower()` och ta bort onödiga mellanslag med `.strip()`.",
      "example": "text = \"  Hej Python  \"\nprint(text.strip())\nprint(text.upper())\nprint(\"a,b,c\".split(\",\"))",
      "walkthrough": [
        "`.strip()` tar bort mellanslag i början och slutet.",
        "`.upper()` ger stora bokstäver, `.lower()` ger små.",
        "`.split(\",\")` delar text till en lista."
      ],
      "challenge": "Gör om variabeln `ord = \"  PYTHON  \"` så att programmet skriver ut **python** utan extra mellanslag.",
      "starter": "ord = \"  PYTHON  \"\n# Använd två metoder",
      "solution": "ord = \"  PYTHON  \"\nprint(ord.strip().lower())",
      "hint": "Kedja metoderna: .strip().lower()",
      "test": "assert __output__.strip() == 'python', 'Resultatet ska vara python utan extra mellanslag.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "slicing",
      "module": "samlingar",
      "title": "Välj en del av en lista",
      "minutes": 8,
      "summary": "Index och slicing med kolon.",
      "goal": "Jag kan hämta ett intervall.",
      "concept": "Med `lista[start:stopp]` kan du plocka ut flera värden på en gång. Python tar med start men inte stopp.",
      "example": "tal = [10, 20, 30, 40, 50]\nprint(tal[1:4])  # [20, 30, 40]\nprint(tal[:2])   # [10, 20]\nprint(tal[-2:])  # [40, 50]",
      "walkthrough": [
        "`[1:4]` ger index 1, 2 och 3.",
        "`[:2]` börjar från start.",
        "`[-2:]` hämtar de två sista värdena."
      ],
      "challenge": "Skriv ut de **tre första talen** i listan `tal = [5, 10, 15, 20, 25]` med slicing.",
      "starter": "tal = [5, 10, 15, 20, 25]\n# Använd [:...]",
      "solution": "tal = [5, 10, 15, 20, 25]\nprint(tal[:3])",
      "hint": "Skriv print(tal[:3]).",
      "test": "assert __output__.strip() == '[5, 10, 15]', 'Visa bara [5, 10, 15].'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "funktion",
      "module": "funktioner",
      "title": "Skapa en funktion med def",
      "minutes": 9,
      "summary": "Skriv kod du kan återanvända.",
      "goal": "Jag kan skapa och anropa en funktion.",
      "concept": "En funktion är ett namngivet kodblock som du kan köra flera gånger. Skriv `def` för att skapa den och `()` för att anropa den.",
      "example": "def halsa():\n    print(\"Hej där!\")\n\nhalsa()\nhalsa()",
      "walkthrough": [
        "`def namn():` skapar en funktion.",
        "Innehållet har indrag.",
        "Ingenting händer förrän du **anropar** funktionen."
      ],
      "challenge": "Skapa en funktion `visa_hej()` som skriver ut **Hej från en funktion!**. Anropa den.",
      "starter": "# Skapa funktionen\n# Anropa den",
      "solution": "def visa_hej():\n    print(\"Hej från en funktion!\")\n\nvisa_hej()",
      "hint": "Börja med def visa_hej():",
      "test": "assert callable(visa_hej), 'Skapa funktionen visa_hej.'\nassert 'Hej från en funktion!' in __output__, 'Anropa funktionen så att texten skrivs ut.'",
      "input": "",
      "quiz": {
        "question": "Kör en funktion direkt när du skriver def?",
        "choices": [
          "Ja, alltid",
          "Nej, du måste anropa den",
          "Bara i webbläsaren"
        ],
        "answer": 1,
        "why": "def definierar bara funktionen. Du kör den med namn()."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "parametrar",
      "module": "funktioner",
      "title": "Funktioner med parametrar",
      "minutes": 8,
      "summary": "Skicka med värden till funktioner.",
      "goal": "Jag kan använda en parameter.",
      "concept": "En parameter är som en tom plats som får ett värde när du anropar funktionen. Då kan samma funktion göra lite olika saker.",
      "example": "def halsa(namn):\n    print(f\"Hej {namn}!\")\n\nhalsa(\"Lea\")\nhalsa(\"Ali\")",
      "walkthrough": [
        "Sätt parametern inom parentes efter funktionsnamnet.",
        "Använd parametern inne i funktionen.",
        "Skicka med ett värde när du anropar: `halsa(\"Lea\")`."
      ],
      "challenge": "Skapa funktionen `dubbla(tal)` som skriver ut talet gånger två. Anropa med **7**.",
      "starter": "def dubbla(tal):\n    # Skriv ut tal * 2\n    pass\n\n# Anropa med 7",
      "solution": "def dubbla(tal):\n    print(tal * 2)\n\ndubbla(7)",
      "hint": "Inuti funktionen: print(tal * 2).",
      "test": "assert callable(dubbla), 'Skapa funktionen dubbla.'\nassert '14' in __output__, 'När du anropar dubbla(7) ska resultatet bli 14.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "return",
      "module": "funktioner",
      "title": "Skicka tillbaka med return",
      "minutes": 9,
      "summary": "Låt en funktion ge dig ett resultat.",
      "goal": "Jag förstår skillnaden på print och return.",
      "concept": "`print()` visar något. `return` skickar tillbaka ett värde till den kod som anropade funktionen, så att du kan spara det eller räkna vidare.",
      "example": "def dubbla(tal):\n    return tal * 2\n\nresultat = dubbla(5)\nprint(resultat + 1)  # 11",
      "walkthrough": [
        "`return` ger tillbaka ett värde.",
        "Koden efter return i samma funktion körs inte.",
        "Spara gärna svaret i en variabel."
      ],
      "challenge": "Skriv funktionen `addera(a, b)` som **returnerar** summan. Skriv sedan ut `addera(4, 6)`.",
      "starter": "def addera(a, b):\n    # Returnera summan\n    pass\n\n# Skriv ut resultatet",
      "solution": "def addera(a, b):\n    return a + b\n\nprint(addera(4, 6))",
      "hint": "Inuti funktionen: return a + b.",
      "test": "assert addera(4,6) == 10, 'Funktionen ska returnera summan av a och b.'\nassert '10' in __output__, 'Visa resultatet 10 med print.'",
      "input": "",
      "quiz": {
        "question": "Vad är skillnaden mellan return och print?",
        "choices": [
          "Det är samma sak",
          "return ger ett värde till koden; print visar det",
          "print stoppar funktionen"
        ],
        "answer": 1,
        "why": "Med return kan du använda resultatet i nya uträkningar."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "scope",
      "module": "funktioner",
      "title": "Lokala och globala variabler",
      "minutes": 7,
      "summary": "Förstå var en variabel finns.",
      "goal": "Jag kan använda variabler inne i en funktion.",
      "concept": "En variabel som skapas inne i en funktion är vanligtvis **lokal**. Den finns där inne, men inte automatiskt utanför.",
      "example": "namn = \"Ali\"  # utanför funktionen\n\ndef halsa():\n    meddelande = \"Hej\"\n    print(meddelande, namn)\n\nhalsa()",
      "walkthrough": [
        "Lokala variabler skapas inne i en funktion.",
        "En funktion kan läsa många variabler som skapats utanför.",
        "Låt gärna funktionen returnera ett resultat i stället för att ändra globala variabler."
      ],
      "challenge": "Skapa funktionen `halva(tal)` med en lokal variabel `svar = tal / 2`. Returnera `svar` och skriv ut `halva(10)`.",
      "starter": "def halva(tal):\n    # lokal variabel svar\n    pass\n\nprint(halva(10))",
      "solution": "def halva(tal):\n    svar = tal / 2\n    return svar\n\nprint(halva(10))",
      "hint": "Använd svar = tal / 2 inne i funktionen.",
      "test": "assert halva(10) == 5, 'Funktionen ska ge 5.0 när talet är 10.'\nassert '5.0' in __output__, 'Visa svaret.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "import",
      "module": "funktioner",
      "title": "Använd färdiga moduler",
      "minutes": 8,
      "summary": "Importera verktyg med import.",
      "goal": "Jag kan använda en modul.",
      "concept": "En modul är kod som någon redan har skrivit. Du använder den med `import`. `math` är en inbyggd modul för matematik.",
      "example": "import math\nprint(math.sqrt(81))\nprint(math.pi)",
      "walkthrough": [
        "Skriv `import math` högst upp.",
        "Använd modulnamnet och punkt: `math.sqrt(81)`.",
        "Du kan också importera en funktion med `from math import sqrt`."
      ],
      "challenge": "Importera `math` och skriv ut kvadratroten ur **144**.",
      "starter": "# Importera modulen\n# Visa sqrt(144)",
      "solution": "import math\nprint(math.sqrt(144))",
      "hint": "Använd math.sqrt(144).",
      "test": "assert '12.0' in __output__, 'Kvadratroten ur 144 är 12.0.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "random",
      "module": "funktioner",
      "title": "Slumpa med random",
      "minutes": 8,
      "summary": "Gör spel mer oförutsägbara.",
      "goal": "Jag kan slumpa ett heltal.",
      "concept": "`random.randint(a, b)` ger ett slumpmässigt heltal mellan a och b, inklusive båda gränserna. Bra till tärningar och små spel.",
      "example": "import random\nkast = random.randint(1, 6)\nprint(f\"Tärningen visar {kast}\")",
      "walkthrough": [
        "Börja med `import random`.",
        "`randint(1, 6)` kan ge 1, 2, 3, 4, 5 eller 6.",
        "Resultatet kan bli olika varje gång."
      ],
      "challenge": "Slumpa ett tal **1 till 10** och skriv ut det.",
      "starter": "import random\n# Slumpa och skriv ut",
      "solution": "import random\ntal = random.randint(1, 10)\nprint(tal)",
      "hint": "Använd random.randint(1, 10).",
      "test": "assert 'randint' in __code__, 'Prova random.randint(1, 10).'\nassert __output__.strip().splitlines(), 'Skriv ut ditt slumptal.'\nlast = __output__.strip().splitlines()[-1]\nassert last.isdigit() and 1 <= int(last) <= 10, 'Sista raden ska vara ett heltal från 1 till 10.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "try",
      "module": "funktioner",
      "title": "Fånga fel med try/except",
      "minutes": 9,
      "summary": "Gör programmet tåligare.",
      "goal": "Jag kan hantera fel utan att programmet kraschar.",
      "concept": "Vissa fel kan hända även om koden är rätt — till exempel när någon skriver \"hej\" i stället för ett tal. Med `try` och `except` kan du hantera det.",
      "example": "try:\n    tal = int(\"hej\")\n    print(tal)\nexcept ValueError:\n    print(\"Det där var inget tal\")",
      "walkthrough": [
        "Lägg riskabel kod i `try`.",
        "Med `except ValueError` fångar du ett visst fel.",
        "Skriv ett vänligt meddelande eller be om nytt svar."
      ],
      "challenge": "Försök göra om texten `\"abc\"` till `int`. Fånga `ValueError` och skriv **Skriv ett nummer**.",
      "starter": "try:\n    tal = int(\"abc\")\n    print(tal)\n# Lägg till except",
      "solution": "try:\n    tal = int(\"abc\")\n    print(tal)\nexcept ValueError:\n    print(\"Skriv ett nummer\")",
      "hint": "Använd except ValueError: och indragen print.",
      "test": "assert 'Skriv ett nummer' in __output__, 'Fånga felet och skriv Skriv ett nummer.'",
      "input": "",
      "quiz": {
        "question": "Vilket fel kan int(\"hej\") ge?",
        "choices": [
          "ValueError",
          "IndexError",
          "NameError"
        ],
        "answer": 0,
        "why": "Texten går inte att göra om till ett heltal."
      },
      "tip": "",
      "tags": []
    },
    {
      "id": "filer",
      "module": "funktioner",
      "title": "Läs och skriv filer",
      "minutes": 10,
      "summary": "Spara text i en fil.",
      "goal": "Jag kan skriva och läsa en textfil.",
      "concept": "I vanliga Python-program kan du spara information i filer. Här sker det i en tillfällig fil i webbläsarens Python-miljö — **inte** på datorns riktiga hårddisk.",
      "example": "with open(\"anteckning.txt\", \"w\", encoding=\"utf-8\") as fil:\n    fil.write(\"Hej från Python!\")\n\nwith open(\"anteckning.txt\", \"r\", encoding=\"utf-8\") as fil:\n    print(fil.read())",
      "walkthrough": [
        "`\"w\"` betyder skriv (skapar eller skriver över filen).",
        "`\"r\"` betyder läs.",
        "`with` stänger filen automatiskt efteråt."
      ],
      "challenge": "Skapa `hej.txt`, skriv texten **Hej fil!** och läs upp den så att texten visas.",
      "starter": "# Skapa och skriv till hej.txt\n# Öppna filen igen och skriv ut innehållet",
      "solution": "with open(\"hej.txt\", \"w\", encoding=\"utf-8\") as fil:\n    fil.write(\"Hej fil!\")\nwith open(\"hej.txt\", \"r\", encoding=\"utf-8\") as fil:\n    print(fil.read())",
      "hint": "Använd open med w, sedan open med r.",
      "test": "assert 'Hej fil!' in __output__, 'Läs filen och skriv ut Hej fil!'\nwith open('hej.txt','r',encoding='utf-8') as f:\n    assert f.read() == 'Hej fil!', 'Filen hej.txt ska innehålla Hej fil!'",
      "input": "",
      "quiz": null,
      "tip": "Den tillfälliga filen försvinner när Pythonmotorn startas om. För riktiga filer på datorn använder du Python lokalt i t.ex. VS Code.",
      "tags": []
    },
    {
      "id": "listcomp",
      "module": "funktioner",
      "title": "List comprehension",
      "minutes": 9,
      "summary": "Skapa en ny lista på en rad.",
      "goal": "Jag kan känna igen en list comprehension.",
      "concept": "List comprehensions är ett kort sätt att skapa listor. Det är inget du måste använda, men bra att känna igen när du läser kod.",
      "example": "kvadrater = [tal * tal for tal in range(1, 5)]\nprint(kvadrater)  # [1, 4, 9, 16]",
      "walkthrough": [
        "Uttrycket före `for` blir varje nytt värde.",
        "Delen `for ... in ...` bestämmer vad du går igenom.",
        "I början är en vanlig for-loop ofta lättare att läsa — och helt okej."
      ],
      "challenge": "Skapa listan `dubbla` med `tal * 2` för talen 1 till 4. Skriv ut listan.",
      "starter": "dubbla = [\n    # skriv uttrycket här\n]\nprint(dubbla)",
      "solution": "dubbla = [tal * 2 for tal in range(1, 5)]\nprint(dubbla)",
      "hint": "Mönstret är [tal * 2 for tal in range(1, 5)].",
      "test": "assert dubbla == [2,4,6,8], 'dubbla ska vara [2, 4, 6, 8].'\nassert '[2, 4, 6, 8]' in __output__, 'Visa listan.'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "klass",
      "module": "funktioner",
      "title": "Klasser — en första titt",
      "minutes": 10,
      "summary": "Samla data och beteenden i objekt.",
      "goal": "Jag kan förstå vad en enkel klass gör.",
      "concept": "En klass beskriver en typ av objekt. Du kan skapa flera objekt från samma klass med olika egenskaper. Detta är ett extra steg när du kan grunderna.",
      "example": "class Hund:\n    def __init__(self, namn):\n        self.namn = namn\n\n    def skall(self):\n        print(f\"{self.namn} säger voff!\")\n\nmin_hund = Hund(\"Bosse\")\nmin_hund.skall()",
      "walkthrough": [
        "`class` skapar en klass.",
        "`__init__` körs när du skapar objektet.",
        "`self` syftar på just det objektet."
      ],
      "challenge": "Skapa ett objekt från klassen `Katt` med namnet **Misse**, och anropa `mjaua()`.",
      "starter": "class Katt:\n    def __init__(self, namn):\n        self.namn = namn\n\n    def mjaua(self):\n        print(f\"{self.namn} säger mjau\")\n\n# Skapa katten och anropa mjaua()",
      "solution": "class Katt:\n    def __init__(self, namn):\n        self.namn = namn\n\n    def mjaua(self):\n        print(f\"{self.namn} säger mjau\")\n\nmin_katt = Katt(\"Misse\")\nmin_katt.mjaua()",
      "hint": "Börja med min_katt = Katt(\"Misse\").",
      "test": "assert 'Misse säger mjau' in __output__, 'Skapa Misse och kör mjaua().'",
      "input": "",
      "quiz": null,
      "tip": "",
      "tags": []
    },
    {
      "id": "projekt-kvitto",
      "module": "projekt",
      "title": "Projekt: enkelt kvitto",
      "minutes": 15,
      "summary": "Sätt ihop variabler, input och matte.",
      "goal": "Jag kan bygga ett program som räknar pris.",
      "concept": "Du ska skapa ett litet kassaprogram. Det tar emot ett pris och antal, räknar ut summan och visar ett kvitto. Ett riktigt användbart vardagsexempel.",
      "example": "vara = \"Penna\"\npris = 12\nantal = 3\nprint(f\"{vara}: {antal} st\")\nprint(f\"Totalt: {pris * antal} kr\")",
      "walkthrough": [
        "Fråga användaren efter ett pris och antal.",
        "Gör om svaren till tal.",
        "Visa totalen med en f-sträng."
      ],
      "challenge": "Läs in pris och antal. Provsvaren är **25** och **3**. Skriv ut **Totalt: 75 kr**.",
      "starter": "pris_text = input(\"Pris per vara: \")\nantal_text = input(\"Antal: \")\n# Omvandla svaren till tal\n# Räkna ut totalen och skriv ut kvittot",
      "solution": "pris_text = input(\"Pris per vara: \")\nantal_text = input(\"Antal: \")\npris = int(pris_text)\nantal = int(antal_text)\ntotal = pris * antal\nprint(f\"Totalt: {total} kr\")",
      "hint": "Använd int() två gånger och multiplicera.",
      "test": "assert 'Totalt: 75 kr' in __output__, 'Med 25 kr och 3 varor ska kvittot visa Totalt: 75 kr.'",
      "input": "25\n3",
      "quiz": null,
      "tip": "Nästa steg: lägg till rabatt för medlemmar eller moms.",
      "tags": []
    },
    {
      "id": "projekt-gissa",
      "module": "projekt",
      "title": "Projekt: gissa talet",
      "minutes": 18,
      "summary": "Skapa ett spel med input och if.",
      "goal": "Jag kan jämföra en gissning med ett hemligt tal.",
      "concept": "Här bygger du ett litet gissningsspel. För att kunna kontrollera uppgiften använder vi ett bestämt hemligt tal. Sen kan du göra en egen version med `random`!",
      "example": "hemligt = 7\ngissning = int(input(\"Gissa 1–10: \"))\nif gissning == hemligt:\n    print(\"Rätt!\")\nelse:\n    print(\"Försök igen\")",
      "walkthrough": [
        "Spara ett hemligt tal.",
        "Fråga efter en gissning och gör om den till int.",
        "Jämför med `==` och ge olika svar."
      ],
      "challenge": "Skapa ett spel med `hemligt = 5`. Om gissningen stämmer, visa **Du vann!**, annars **Testa igen**. Provgissning: 5.",
      "starter": "hemligt = 5\ngissning = int(input(\"Gissa talet: \"))\n# Använd if/else",
      "solution": "hemligt = 5\ngissning = int(input(\"Gissa talet: \"))\nif gissning == hemligt:\n    print(\"Du vann!\")\nelse:\n    print(\"Testa igen\")",
      "hint": "Jämför gissning == hemligt.",
      "test": "assert hemligt == 5, 'Hemliga talet ska vara 5.'\nassert 'Du vann!' in __output__, 'När användaren gissar 5 ska Du vann! visas.'",
      "input": "5",
      "quiz": null,
      "tip": "Testa sedan att byta provsvaret till 4. Visas Testa igen?",
      "tags": []
    },
    {
      "id": "projekt-quiz",
      "module": "projekt",
      "title": "Projekt: ett miniquiz",
      "minutes": 18,
      "summary": "Frågor, poäng och villkor.",
      "goal": "Jag kan räkna poäng i ett quiz.",
      "concept": "Ett quiz är ett roligt sätt att använda det du lärt dig. Ett poängsystem blir lätt med variabler och `if`.",
      "example": "poang = 0\nsvar = input(\"Huvudstad i Sverige? \").lower()\nif svar == \"stockholm\":\n    poang += 1\nprint(f\"Poäng: {poang}\")",
      "walkthrough": [
        "Starta på `poang = 0`.",
        "Ge en poäng när svaret är rätt.",
        "Använd `.lower()` om du vill acceptera olika stora bokstäver."
      ],
      "challenge": "Fråga **Vad heter språket vi lär oss?**. Om användaren svarar Python ska resultatet vara **Poäng: 1**.",
      "starter": "poang = 0\nsvar = input(\"Vad heter språket vi lär oss? \")\n# Rätta svaret och visa poäng",
      "solution": "poang = 0\nsvar = input(\"Vad heter språket vi lär oss? \").lower()\nif svar == \"python\":\n    poang += 1\nprint(f\"Poäng: {poang}\")",
      "hint": "Jämför svar.lower() == \"python\" och öka poang med 1.",
      "test": "assert poang == 1, 'Med svaret Python ska poängen bli 1.'\nassert 'Poäng: 1' in __output__, 'Skriv ut Poäng: 1.'",
      "input": "Python",
      "quiz": null,
      "tip": "Extra: bygg på med tre frågor och använd en funktion för att rätta svaren.",
      "tags": []
    },
    {
      "id": "projekt-att-gora",
      "module": "projekt",
      "title": "Projekt: att göra-lista",
      "minutes": 20,
      "summary": "Använd listor, loopar och input.",
      "goal": "Jag kan bygga en enkel att göra-lista.",
      "concept": "Sista projektet är ett litet uppgiftssystem. Du ska lägga till något i en lista och sedan visa alla uppgifter med en loop.",
      "example": "uppgifter = [\"Läsa\", \"Träna\"]\nuppgifter.append(\"Handla\")\nfor sak in uppgifter:\n    print(f\"- {sak}\")",
      "walkthrough": [
        "Skapa en lista med ett eller flera värden.",
        "Använd `input()` för en ny uppgift och `.append()` för att lägga till den.",
        "Gå igenom allt med en for-loop."
      ],
      "challenge": "Skapa `uppgifter = [\"Plugga\"]`. Läs in provsvaret **Träna**, lägg till det och skriv ut **- Plugga** och **- Träna**.",
      "starter": "uppgifter = [\"Plugga\"]\nny = input(\"Ny uppgift: \")\n# Lägg till ny uppgift\n# Visa alla uppgifter",
      "solution": "uppgifter = [\"Plugga\"]\nny = input(\"Ny uppgift: \")\nuppgifter.append(ny)\nfor sak in uppgifter:\n    print(f\"- {sak}\")",
      "hint": "Använd uppgifter.append(ny) och en for-loop.",
      "test": "assert uppgifter == ['Plugga','Träna'], 'Listan ska innehålla Plugga och Träna.'\nassert '- Plugga' in __output__ and '- Träna' in __output__, 'Visa båda uppgifterna med ett bindestreck.'",
      "input": "Träna",
      "quiz": null,
      "tip": "Utmana dig själv: lägg till en meny där användaren kan välja att lägga till eller visa uppgifter.",
      "tags": []
    }
  ],
  "reference": [
    {
      "group": "Visa och ta emot",
      "name": "print()",
      "description": "Visar text eller ett värde",
      "code": "print(\"Hej!\")"
    },
    {
      "group": "Visa och ta emot",
      "name": "input()",
      "description": "Tar emot text från användaren",
      "code": "namn = input(\"Namn? \")"
    },
    {
      "group": "Visa och ta emot",
      "name": "type()",
      "description": "Visar ett värdes datatyp",
      "code": "print(type(42))"
    },
    {
      "group": "Visa och ta emot",
      "name": "len()",
      "description": "Räknar antal tecken eller element",
      "code": "print(len(\"Python\"))"
    },
    {
      "group": "Visa och ta emot",
      "name": "str()",
      "description": "Gör ett värde till text",
      "code": "print(str(25) + \" kr\")"
    },
    {
      "group": "Visa och ta emot",
      "name": "int()",
      "description": "Gör text eller tal till heltal",
      "code": "print(int(\"12\") + 3)"
    },
    {
      "group": "Visa och ta emot",
      "name": "float()",
      "description": "Gör text eller tal till decimaltal",
      "code": "print(float(\"2.5\"))"
    },
    {
      "group": "Visa och ta emot",
      "name": "bool()",
      "description": "Gör ett värde till True eller False",
      "code": "print(bool(1))"
    },
    {
      "group": "Visa och ta emot",
      "name": "f-sträng",
      "description": "Sätter variabler inuti text",
      "code": "namn = \"Kim\"\nprint(f\"Hej {namn}\")"
    },
    {
      "group": "Visa och ta emot",
      "name": "round()",
      "description": "Avrundar ett tal",
      "code": "print(round(3.14159, 2))"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "+  -  *  /",
      "description": "Plus, minus, gånger, delat",
      "code": "print(6 * 7)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "//",
      "description": "Heltalsdivision",
      "code": "print(7 // 2)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "%",
      "description": "Rest efter heltalsdivision",
      "code": "print(7 % 2)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "**",
      "description": "Upphöjt till",
      "code": "print(2 ** 4)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "==",
      "description": "Jämför om lika",
      "code": "print(5 == 5)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "!=",
      "description": "Jämför om olika",
      "code": "print(5 != 6)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": ">  <  >=  <=",
      "description": "Större, mindre, minst, högst",
      "code": "print(8 >= 5)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "and / or / not",
      "description": "Sätt ihop eller vänd villkor",
      "code": "print(True and False)"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "abs()",
      "description": "Absolutvärde",
      "code": "print(abs(-7))"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "sum()",
      "description": "Summerar en samling",
      "code": "print(sum([1, 2, 3]))"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "min() / max()",
      "description": "Minsta eller största värdet",
      "code": "print(max([2, 9, 4]))"
    },
    {
      "group": "Matematik & jämförelser",
      "name": "+=  -=",
      "description": "Öka eller minska en variabel",
      "code": "tal = 3\ntal += 2\nprint(tal)"
    },
    {
      "group": "Villkor & loopar",
      "name": "if",
      "description": "Kör när villkoret är sant",
      "code": "if 5 > 3:\n    print(\"Ja\")"
    },
    {
      "group": "Villkor & loopar",
      "name": "elif",
      "description": "Testar nästa villkor",
      "code": "poang = 60\nif poang > 90:\n    print(\"A\")\nelif poang > 50:\n    print(\"Godkänd\")"
    },
    {
      "group": "Villkor & loopar",
      "name": "else",
      "description": "Kör i övriga fall",
      "code": "if False:\n    print(\"Ja\")\nelse:\n    print(\"Nej\")"
    },
    {
      "group": "Villkor & loopar",
      "name": "for",
      "description": "Går igenom en samling",
      "code": "for x in [1, 2]:\n    print(x)"
    },
    {
      "group": "Villkor & loopar",
      "name": "range()",
      "description": "Ger en talföljd",
      "code": "print(list(range(1, 5)))"
    },
    {
      "group": "Villkor & loopar",
      "name": "while",
      "description": "Kör medan villkor är sant",
      "code": "tal = 0\nwhile tal < 3:\n    print(tal)\n    tal += 1"
    },
    {
      "group": "Villkor & loopar",
      "name": "break",
      "description": "Avslutar loop",
      "code": "for x in range(5):\n    if x == 2: break\n    print(x)"
    },
    {
      "group": "Villkor & loopar",
      "name": "continue",
      "description": "Hoppar till nästa varv",
      "code": "for x in range(3):\n    if x == 1: continue\n    print(x)"
    },
    {
      "group": "Villkor & loopar",
      "name": "pass",
      "description": "Tomt kodblock som platshållare",
      "code": "if True:\n    pass"
    },
    {
      "group": "Villkor & loopar",
      "name": "enumerate()",
      "description": "Ger index och värde i loop",
      "code": "for i, x in enumerate([\"a\", \"b\"]):\n    print(i, x)"
    },
    {
      "group": "Villkor & loopar",
      "name": "zip()",
      "description": "Kopplar ihop två samlingar",
      "code": "for a, b in zip([1,2], [3,4]):\n    print(a,b)"
    },
    {
      "group": "Listor & ordböcker",
      "name": "list()",
      "description": "Skapar en lista",
      "code": "print(list(\"hej\"))"
    },
    {
      "group": "Listor & ordböcker",
      "name": "[]",
      "description": "Hämtar ett element med index",
      "code": "print([\"a\", \"b\"][0])"
    },
    {
      "group": "Listor & ordböcker",
      "name": "[:]",
      "description": "Väljer en del av lista eller text",
      "code": "print([1,2,3,4][1:3])"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".append()",
      "description": "Lägger till sist i en lista",
      "code": "tal = [1]\ntal.append(2)\nprint(tal)"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".insert()",
      "description": "Sätter in på en plats",
      "code": "tal = [1,3]\ntal.insert(1,2)\nprint(tal)"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".remove()",
      "description": "Tar bort första matchande värdet",
      "code": "tal = [1,2,2]\ntal.remove(2)\nprint(tal)"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".pop()",
      "description": "Tar bort och returnerar ett värde",
      "code": "tal = [1,2]\nprint(tal.pop())"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".sort()",
      "description": "Sorterar själva listan",
      "code": "tal = [3,1,2]\ntal.sort()\nprint(tal)"
    },
    {
      "group": "Listor & ordböcker",
      "name": "sorted()",
      "description": "Ger en ny sorterad lista",
      "code": "print(sorted([3,1,2]))"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".count()",
      "description": "Räknar hur många gånger värdet finns",
      "code": "print([1,1,2].count(1))"
    },
    {
      "group": "Listor & ordböcker",
      "name": "in",
      "description": "Kontrollerar om ett värde finns",
      "code": "print(\"a\" in [\"a\",\"b\"])"
    },
    {
      "group": "Listor & ordböcker",
      "name": "dict / {}",
      "description": "Ordbok med nycklar och värden",
      "code": "person = {\"namn\": \"Kim\"}\nprint(person[\"namn\"])"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".get()",
      "description": "Hämtar en nyckel med reservvärde",
      "code": "person = {\"namn\": \"Kim\"}\nprint(person.get(\"stad\", \"Okänd\"))"
    },
    {
      "group": "Listor & ordböcker",
      "name": ".items()",
      "description": "Ger nyckel-värde-par",
      "code": "d = {\"a\":1}\nfor k, v in d.items():\n    print(k,v)"
    },
    {
      "group": "Listor & ordböcker",
      "name": "set()",
      "description": "Samling av unika värden",
      "code": "print(sorted(set([1,1,2])))"
    },
    {
      "group": "Listor & ordböcker",
      "name": "tuple / ()",
      "description": "Ordnad samling som inte kan ändras",
      "code": "punkt = (2, 3)\nprint(punkt[0])"
    },
    {
      "group": "Text",
      "name": ".lower()",
      "description": "Gör text till små bokstäver",
      "code": "print(\"HEJ\".lower())"
    },
    {
      "group": "Text",
      "name": ".upper()",
      "description": "Gör text till stora bokstäver",
      "code": "print(\"hej\".upper())"
    },
    {
      "group": "Text",
      "name": ".strip()",
      "description": "Tar bort mellanslag runt text",
      "code": "print(\" hej \".strip())"
    },
    {
      "group": "Text",
      "name": ".replace()",
      "description": "Byter ut text",
      "code": "print(\"Hej Kalle\".replace(\"Kalle\", \"Kim\"))"
    },
    {
      "group": "Text",
      "name": ".split()",
      "description": "Delar en text till en lista",
      "code": "print(\"a,b,c\".split(\",\"))"
    },
    {
      "group": "Text",
      "name": ".join()",
      "description": "Slår ihop text från lista",
      "code": "print(\"-\".join([\"a\",\"b\"]))"
    },
    {
      "group": "Text",
      "name": ".startswith()",
      "description": "Testar hur en text börjar",
      "code": "print(\"Python\".startswith(\"Py\"))"
    },
    {
      "group": "Text",
      "name": ".find()",
      "description": "Hittar index för deltext, annars -1",
      "code": "print(\"Python\".find(\"th\"))"
    },
    {
      "group": "Text",
      "name": ".isdigit()",
      "description": "Kontrollerar om text består av siffror",
      "code": "print(\"123\".isdigit())"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "def",
      "description": "Skapar en funktion",
      "code": "def halsa():\n    print(\"Hej\")\nhalsa()"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "return",
      "description": "Ger tillbaka ett resultat",
      "code": "def dubbel(x):\n    return x * 2\nprint(dubbel(5))"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "import",
      "description": "Laddar en modul",
      "code": "import math\nprint(math.pi)"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "math.sqrt()",
      "description": "Kvadratroten",
      "code": "import math\nprint(math.sqrt(16))"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "random.randint()",
      "description": "Slumpar ett heltal i intervall",
      "code": "import random\nprint(random.randint(1, 6))"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "try / except",
      "description": "Fångar och hanterar ett fel",
      "code": "try:\n    int(\"hej\")\nexcept ValueError:\n    print(\"Inte ett tal\")"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "with open()",
      "description": "Öppnar fil säkert",
      "code": "with open(\"test.txt\", \"w\") as f:\n    f.write(\"Hej\")\nprint(\"Sparat i tillfällig fil\")"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "class",
      "description": "Skapar en klass",
      "code": "class Hund:\n    pass\nprint(Hund())"
    },
    {
      "group": "Funktioner & verktyg",
      "name": "help()",
      "description": "Visar hjälp om en funktion",
      "code": "help(len)"
    }
  ]
};
