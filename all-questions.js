quiz2 = [
  {
    question: 'Wie bezeichnet man ein </p> und was fehlt hier?',
    answer: "Das ist ein 'closing Tag'. Zu einem 'closing' Tag gehört auch immer ein 'Opening' Tag - also <div></div>",
  },
  {
    question:
      "In welcher Relation das div mit der ID 'content' zu den anderen Elementen? Zur besseren Lesbarkeit könntest du das Snippet in dein VSC kopieren ;) <body><div id='main'><div id='content'><p> Die Coding Journey ist schon ziemlich nett! </p></div></div></body>",
    answer:
      "<p> ist ein Child-Element des divs und <div id='main'> ist sein Parent. Darüber hinaus ist <div id='content'> ist das Grand-Child des Body Elements.",
  },
  { question: 'Wofür sind divs gut?', answer: 'Um HTML Elemente zu gruppieren', answer: 'Um Styles hinzuzufügen' },
  {
    question: 'Welche Elemente kann ein <div> als Kindelemente enthalten?',
    answer: 'Alle anderen HTML Elemente, auch andere divs - allerdings kein head/body!',
  },
  { question: 'Was sind Attribute?', answer: 'Zusätzliche Eigenschaften eines HTML elements' },
  { question: 'Wo werden Attribute hinzugefügt?', answer: 'Zum Opening Tag eines HTML ELements' },
  { question: 'Aus was besteht ein Attribute?', answer: 'Aus Name und Value' },
  {
    question: "<div id='intro'> - wie bezeichnet man die 'id' Information und wozu ist sie gut?",
    answer:
      'Das ist ein Attribut. Ein Attribut dient zur Identifikation von gleichen HTML Elementen, bspw. zur Unterscheidung mehrerer <div> Elemente. Attribute dienen noch vielen anderen Zwecken, wie dem Styling, aber das kommt erst später :) Das ID Attribut im speziellen ist dafür da, ein Element eindeutig zu identifizieren: Die ID sollte also immer einzigartig sein.',
  },
  {
    question: 'Welche HTML ELemente nutzt man bevorzugt, um Text-Inhalte darzustellen?',
    answer: 'p (paragraph) oder span Elemente',
  },
  {
    question: "Benutzt man <span> für 'Inline' oder für 'Block' Inhalte?",
    answer:
      "Inline! Das ist wichtig, denn ein <span> lässt noch weiteren Inhalt in der selben 'Zeile' wie es selbst zu. Das heißt, ihr könnt beispielsweise ein inline, ein strong und em Element in dem selben Text benutzen, ohne, das jedes Mal ein ungewollter Zeilenumbruch entsteht: All diese Elemente sind Inline-Elemente. Ein <div>, das man für Blockelemente benutzt, blockiert die gesamte Breite der Seite für sich. Richtig interessant wird das, wenn wir zum CSS Teil kommen.",
  },
  {
    question: "Was tut ein 'br' Element und wie schreibt man es?",
    answer:
      "Ein br (break) HTML Element fügt einen Zeilenumbruch in Texten hinzu. Es ist ein 'self closing' Tag und kommt ohne ein closing Tag aus. Du kannst es entweder in seiner kürzten Form schreiben: <br> oder mit dem 'schließenden' Slash dazu: <br />. Beide Varianten sind valide.",
  },
  {
    question: 'Welche Kind-Elemente kann ein <ul> HTML Element haben?',
    answer:
      'Nur <li> (List Item) Elemente. Es sollte nicht direkt Text oder irgendwelche anderen Elemente beinhalten - diese sollten in dem <li> Element untergebracht sein, um klar zu machen, zu welchem Listenpunkt der Inhalt gehört.',
  },
  {
    question:
      'Wenn du eine Schritt-für-Schritt Anleitung in HTML verfassen möchtest, welches Element eignet sich dafür am besten?',
    answer: 'Das <ol> Element, das eine geordnete (nummerierte) Liste an Punkten erzeugt',
  },
  {
    question:
      'Erinnerst du dich an die Grafik über den Aufbau eines HTML Elements? Wie würdest du dieses Erklärbild (Dateiname: html-element-structure.jpg) zu einer Seite hinzufügen?',
    answer:
      "Via <img src='html-element-structure' alt='Explanation of the general build-up of HTML Elements'> - das img Tag ist für das Einbinden eines Bildes da und das src (source) Attribut spezifiert die Quelle des anzuzeigenden Bildes. Das Attribut alt (alternative) ermöglicht es bspw. Screenreadern, Nutzern mit Sehbeeinträchtigung den Inhalt des Bildes zu erklären. Außerdem hilft das alt Attribut als Platzhalter für Bilder, die nicht geladen werden können und verbessert die Maschinenlesbarkeit deiner Website, was bspw. für das Ranking bei Suchmaschinen wichtig ist (SEO).",
  },
  {
    question: "Was bezeichnet man als 'self closing tag'?",
    answer:
      'Ein HTML Element bzw. ein Start Tag, das mit einem Slash abschließt: <img />. Diese benötigen kein explizites End-Tag mehr',
  },
  {
    question: 'Wie zeigt man bei einem Video HTML Element die Kontrollelemente an?',
    answer: "Indem man das controls Attribut hinzufügt, bspw: <video src='...' controls></video>",
  },
  {
    question:
      'Was kann man zwischen den Opening und Closing tag von <video> hinzufügen und in welchen Fällen wird der Inhalt angezeigt?',
    answer: 'Fallback-Text. Sieht man, wenn das Video nicht geladen werden kann',
  },
  {
    question: 'Wie erstelle ich eine Unter-Unter-Überschrift?',
    answer:
      "Mithilfe des <h3> Tags. h steht für 'Heading' und die Zahl gibt das Level der Überschrift an - über h3 gibt es also h2 und h1",
  },
];
