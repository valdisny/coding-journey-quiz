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

* Beim Laden der Quizseite geben wir den quiznamen als Parameter mit und bestimmen so, welche Frage/Antwortpäärchen wir laden müssen. Das passiert aber drüben in quiz.js - also husch, husch, ab mit dir.
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
  quiz2: [
    {
      question: "Wie kennzeichnest du die Version deines HTML-Dokuments und wieso solltest du das tun?",
      answer: 'Du kennzeichnest die Version deines html Dokuments als HTML5 via <!DOCTYPE html>. Übrigens, ein HTML 4 Dokument, also von der Vorgänger version, würdest du mit <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"> kennzeichnen - was ein Glück, das sie das eingekürzt haben. :) Der Sinn und Zweck einer Kennzeichnung ist, das es irgendwann HTML 6 geben wird, das ggf. inkompatibel zu HTML 5 sein wird. Wenn du nun keine Versionskennzeichnung in deinem HTML-File hast, würde der Browser annehmen, sie ist in der neuesten Version geschrieben - und deine Datei würde ggf. nicht mehr richtig angezeigt. Mit der Versionsdeklaration weiß der Browser immer, wie er die Datei lesen muss.'
    },    {
      question: "Wieso gehören all unsere Inhaltselemente in ein <body> Element?",
      answer: "Weil es auch ein <head> Element gibt. Ohne die explizite Zuordnung zum <body> Element wüsste der Browser nicht, ob dein Element nun eine Metainformation ist (und in den Head gehört) oder Teil der anzuzeigenen Seite (also etwas im body)."
    },    {
      question: "Wozu ist der <head> da?",
      answer: "Im Head-Element können wir allerlei Metainformationen unterbringen, die zwar nicht unmittelbar auf der Seite angezeigt werden, jedoch beeinflussen, wie der Browser damit umgeht. Bereits kennengelernt hierzu hast du das <title> Element, das beeinflusst, wie der Browser den Browsertab anzeigt. Spoiler: Hier wirst du später auch weitere Dateien einbinden, namentlich CSS- und JS-Dateien, die mit deiner Seite ausgeliefert werden sollen."
    },    {
      question: "Was ist ein <a> Tag?",
      answer: 'Ein <a> Tag ist das, was wir allgemein als "Link" bezeichnen: Ein Verweis zu einem anderen Ort. Das a steht dafür für "anchor" und die Dinger heißen so, weil sie ganz ganz ganz am Anfang mal dafür gedacht waren, das du zwischen den Inhalten derselben Seite springst. Aber das nur als Trivia.'
    },    {
      question: "Schreibe ein Link-Element, das auf youtube.com linkt.",
      answer: '<a href="https://youtube.com">Youtube</a>. Beachte, das du unbedingt https:// (das ist das Protokoll) vor deinen Link schreiben musst, ansonsten versucht dein Browser, den Link als lokalen Verweis zu interpretieren und kommt nicht am gewünschten Ziel an. Das <a> Element ist unser Link und das href Attribut (ich habe keine Ahnung, was das in lang heißt) gibt das Ziel unseres Links an.'
    },    {
      question: "Zu welchen Arten von Zielen kann ein Link-Element verlinken?",
      answer: 'Zu drei Arten: Ankern auf der aktuellen Seite, zu anderen relativ gelegenen Dateien und zu externen Seiten. Links zu Abschnitten auf der selben Seite erzeugst du, in dem du bspw. <a href="#someId">Navi<a> nutzt. Damit springst du zu dem Element, das die ID someId gepflegt hat. Übrigens kannst du <a href="#">To top</a> nutzen, um zum Anfang der aktuellen Seite zu springen. Links zu relativen Seiten schreibst du per <a href="./anderereDatei.html">Andere Datei</a> und externe Ziele steuerst du an, in dem du das Protokoll, mit dem du navigieren möchtest, voranstellst - in aller Regel ist das https://: <a href="https://heise.de">Heise</a> '
    },    {
      question: "Wie kannst du Links in einem neuen Tab öffnen lassen?",
      answer: 'Indem du das Ziel des Links mithilfe des target-Attribut spezifizierst. Für einen neuen Tab nutzt du target="_blank", was so ziemlich der Standardfall ist - du kannst target aber beispielsweise auch irgendeinen Namen mitgeben, zum Beispiel <a target="profil" href="./profil.html">Profilseite</a> - beim ersten Klick öffnet sich ein neuer Tab und dieser Tab hat dann quasi den Namen "Profil". Das heißt, wenn du erneut auf diesen Link klickst, oder einen anderen Link mit dem selben Target, öffnet sich nicht ein zweiter Tab, sondern der erste Tab wird mit dem neuen Inhalt überschrieben.'
    },    {
      question: 'Was bedeutet das "./" in einem relativen Pfad?',
      answer: 'Bei einem relativen Pfad musst du angeben, von wo aus du loslaufen möchtest. ./ referenziert dabei dein aktuelles Verzeichnis, also das Verzeichnis, in der die Datei liegt, die den Link beinhaltet. Möchtest du von index.html auf profile.html linken, die direkt neben index.html liegt, nutzt du ./profile.html. Würde profile.html in einem Unterverzeichnis namens subpages liegen, würdest du zu ./subpages/profile.html linken. Soweit so gut - wenn du nun gerade auf profile.html bist und willst zurück zur index.html, die ja nun in einem Ordner _über_ dir liegt, nutzt du ../index.html. ../ bedeutet, du gehst von deiner aktuellen Position ein Verzeichnis zurück bzw. "nach oben". Außerdem hättest du noch die Möglichkeit, einen Link mit / anfangen zu lassen (ohne Punkt davor!). / navigiert zur Wurzel deines Servers, also zur allerobersten Stelle. In unserem Beispiel würde entsprechend auch /index.html als Link funktionieren.'
    },    {
      question: "Was kann ein a-Element beinhalten?",
      answer: ' Ein a Element kann Parent von so ziemlich allen Elementen sein, die dann als "Klickfläche" für den Link herhalten. Sehr oft wird das genutzt um Bilder, beispielsweise kleine Icons oder Logos, anklickbar zu machen und zur Navigation zu nutzen. Du könntest aber auch einen Fließtext oder ein ganzes div in ein Link-Element packen, wenn du möchtest. Aus Userperspektive sollten verlinkte Elemente natürlich einigermaßen sinnvoll genutzt werden und ersichtlich sein; es macht keinen Spaß, eine Website zu benutzen, die dich scheinbar willkürlich auf andere Seiten schickt.'
    },    {
      question: "Wieso ist es wichtig, eine HTML Datei vernünftig zu formatieren und was heißt das genau?",
      answer: "Grundsätzlich ist dem Browser piepegal, ob deine HTML Datei für einen Menschen lesbar formatiert ist oder nicht. Der Browser ignoriert Zeilenumbrüche wie Leerzeichen zwischen Elementen vollständig; sie sind für ihn irrelevant. Trotzdem gehört es zum guten Ton, eine Datei zu formatieren, denn es macht die Arbeit daran signifikant einfacher. Eine Datei zu formatieren ist in etwa so, wie viele unterschiedliche Arbeitsmaterialien ordentlich in Fächer zu sortieren, statt sie alle auf einen großen Haufen zu schmeißen. Eine Datei formatierst du meist, in dem du HTML- Elementen eine eigene Zeile gibst - je nach Umfang auch gern sowohl das Start-Tag, den Inhalt und das End-Tag in eine jeweils eigene - sowie eine Einrückung von meist 2 Spaces pro Parent-Element vorranstellst. Das HTML Element wäre gar nicht eingerückt, der body um 2 Spaces, das erste div um 4, undsoweiter. Das macht es dir deutlich einfacher, Eltern-Kind-Strukturen in deiner Datei zu erkennen. Glücklicherweise nehmen dir Code-Editoren wie Visual Studio Code bereits einen Großteil dieser Formatierungsarbeit ab."
    },    {
      question: "Wie schreibt man einen HTML-Kommentar und was tut er?",
      answer: 'Ein HTML-Kommentar sieht folgendermaßen aus: <!-- das hier ist der kommentar -->. Kommentare gehören wie die Formatierung einer Datei zu Hilfsmitteln des Entwicklers. Sie werden vom Browser vollständig ignoriert. Kommentare können nützlich sein, um bspw. eine größere Datei in Blöcke zu unterteilen und die Übersicht zu verbessern (á la" Das hier ist die Navigation, das hier der Inhaltsbereich, die Seitenleiste, der Footer, ...") oder komplizierteren Code zu erklären (á la "Hier ermitteln wir die initiale Browserbreite des Nutzers, um das richtige CSS zu laden").'
    }
    
  ]
};
