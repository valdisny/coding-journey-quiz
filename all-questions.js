/**
* === SPOILER ALERT! ===
* === SPOILER ALERT! ===
* === SPOILER ALERT! ===
*
* Du willst dir diese Datei vermutlich nicht anschauen, außer, du möchtest dir die kommenden Quizes ordentlich vermiesen. Falls dich der generelle Aufbau interessiert: Diese Datei beinhaltet
* eine Variable "allQuestions", die wiederrum mit einem Objekt initialisiert wird. Dieses Objekt hat den Quiznamen, bspw "quiz1" als Key und ein Array aus Frage/Antwort-Objekten als Wert:

allQuestions = {
  quizName: [
    {
      question: 'Ist das hier eine Frage?',
      answer: 'Ja, doch, ich bin ganz optimistisch.'
    },
    {...} // usw
  ]
}

* Beim Laden der Quizseite geben wir den quiznamen als Parameter mit und bestimmen so, welche Frage/Antrowrtpäärchen wir laden müssen. Das passiert aber drüben in quiz.js - also husch, husch, ab mit dir.
* === SPOILER ALERT! ===
* === SPOILER ALERT! ===
* === SPOILER ALERT! ===
*/

allQuestions = {
  quiz1: [
    {
      question: 'Nehmen wir an, du hast folgendes HTML Dokument: <body> </p> </body>. Was genau ist das </p> und was fehlt hier für valides HTML?',
      answer:
        "Das ist ein 'closing Tag' eines paragraph Elements. Zu einem 'closing' Tag gehört auch immer ein 'opening' Tag - vollständig wäre es also mit <p></p>",
    },
    {
      question:
        "In welcher Relation steht das div mit der ID 'content' zu den anderen Elementen? (Zur besseren Lesbarkeit kannst du das Snippet in dein Visual Studio Code kopieren) <body><div id='main'><div id='content'><p> Die Coding Journey ist schon ziemlich nett! </p></div></div></body>",
      answer:
        "<p> ist ein Child-Element des 'content' divs und <div id='main'> ist sein Parent. Darüber hinaus ist <div id='content'> ist das Grand-Child des Body Elements. Das heißt das 'content' div ist ein descendent vom body, und body ist ein ancestor des 'content' divs.",
    },
    {
      question: 'Wofür sind "div"-Elemente gut?',
      answer:
        'Das div ist ein Element, das hauptsächlich zum Gruppieren von anderen Elementen genutzt wird, um sowohl einen semantischen Zusammenhang in der Struktur zu signalisieren als auch, später dann, diese Elemente einfacher über einen CSS Selektor ansprechen zu können. Man könnte sagen, div Elemente sind Boxen, die zusammengehörigen Krimskram beinhalten: Eine Box für die Nudeln, eine andere für das Obst, darein kommen die Socken, ...',
    },
    {
      question: 'Welche Elemente kann ein <div> als Kindelemente enthalten?',
      answer:
        'Alle anderen HTML Elemente, auch andere divs. Es gibt da kaum Begrenzungen - Ausnahmen bilden hier die head/body Elemente, die immer nur auf oberste Ebene (und immer nur einmal) vorkommen.',
    },
    {
      question: 'Was sind, im Kontext von HTML, sogenannte Attribute? Wie sehen sie aus?',
      answer:
        'Attribute sind zusätzliche Eigenschaften an einem HTML Element. Sie bestehen aus einem Namen und einem Value und werden am Opening Tag des HTML Elements hinzugefügt: <div class="i-am-an-attribute"></div>. "class" ist hier der Name und i-am-an-attribute der Value des Attributs.',
    },
    {
      question: "<div id='intro'> - wie bezeichnet man die 'id' Information und wozu ist sie gut?",
      answer:
        'Das ist ein Attribut. Ein Attribut dient zur Identifikation von gleichen HTML Elementen, bspw. zur Unterscheidung mehrerer <div> Elemente. Attribute dienen noch vielen anderen Zwecken, wie dem Styling, aber das kommt erst später :) Das ID Attribut im speziellen ist dafür da, ein Element eindeutig zu identifizieren: Die ID sollte also immer einzigartig sein.',
    },
    {
      question: 'Welche HTML ELemente nutzt man bevorzugt, um Text-Inhalte darzustellen?',
      answer:
        'Ein p (paragraph) ist das Standard-HTML-Element für Text. Man kann aber genauso gut ein span Element nutzen oder Text direkt in einem div hinterlegen. Darüber hinaus gibt es noch HTML-Elemente, die Text semantisch hervorheben: strong und em.',
    },
    {
      question: "Benutzt man <span> für 'Inline' oder für 'Block' Inhalte?",
      answer:
        "Inline! Das ist wichtig, denn ein <span> lässt noch weiteren Inhalt in der selben 'Zeile' wie es selbst zu. Das heißt, ihr könnt beispielsweise ein inline, ein strong und em Element in dem selben Text benutzen, ohne, das jedes Mal ein ungewollter Zeilenumbruch entsteht: All diese Elemente sind Inline-Elemente. Ein <div>, das man für Blockelemente benutzt, blockiert die gesamte Breite der Seite für sich. Richtig interessant wird das, wenn wir zum CSS Teil kommen.",
    },
    {
      question: "Was bewirkt ein 'br' Element und wie schreibt man es?",
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
      answer: 'Das <ol> Element, das eine geordnete (nummerierte) Liste an Punkten erzeugt.',
    },
    {
      question:
        'Wie würdest du ein Bild (Dateiname: tree-roots.jpg), das den Zusammenhang zwischen einem Baum und seinem Wurzelnetz erklärt, zu einer Seite hinzufügen?',
      answer:
        "Via <img src='tree-roots.jpg' alt='Explanation how the tree and its roots are connected'> - das img Tag ist für das Einbinden eines Bildes da und das src (source) Attribut spezifiert die Quelle des anzuzeigenden Bildes. Das Attribut alt (alternative) ermöglicht es bspw. Screenreadern, Nutzern mit Sehbeeinträchtigung den Inhalt des Bildes zu erklären. Außerdem hilft das alt Attribut als Platzhalter für Bilder, die nicht geladen werden können und verbessert die Maschinenlesbarkeit deiner Website, was bspw. für das Ranking bei Suchmaschinen wichtig ist (SEO).",
    },
    {
      question: "Was bezeichnet man als 'self closing tag'?",
      answer:
        'Ein HTML Element bzw. ein Start Tag, das mit einem Slash abschließt: <img />. Diese haben kein explizites End-Tag mehr.',
    },
    {
      question:
        'Was kann man zwischen den Opening Tag und Closing tag von <video> hinzufügen und in welchen Fällen wird der Inhalt angezeigt?',
      answer: 'Einen Fallback-Text, der angezeigt wird, wenn das Video nicht geladen werden kann.',
    },
    {
      question: 'Wie erstelle ich eine Unter-Unter-Überschrift?',
      answer:
        "Mithilfe des <h3> Tags. h steht für 'Heading' und die Zahl gibt das Level der Überschrift an - über h3 gibt es also h2 und h1, was h3 zu einer Unter-Unter-Überschrift macht.",
    },
  ],
};
