const REVEAL_CLASSNAME = 'revealed';

// Read the URL you're visiting and extracting the search param called "quiz" to get its value
const queryString = window.location.search;
const quizName = new URLSearchParams(queryString).get('quiz');

// ===== Load the questions =====
// "allQuestions" is a Javascript object hosting all the questions of all quizes.
// For better readability, it is outsourced in an own JS file ("all-questions.js"), but available here
// because it is imported into the quiz.html file in which context this file is running
let questions = allQuestions[quizName];

// ==== Filling the page with questions ====
/* The initial HTML is containing a template HTML Element with the class "question". The following code
 * - Greps the Element
 * - Duplicates it for every question we have and fills in the question/answer text
 * - Adds the duplicated (new) HTML element to the div with class "questions-wrap", that should contain all our questions
 */
const node = document.querySelector('.question');

if (questions) {
  const header = document.querySelector('h1');
  console.log(header);
  header.textContent = `Willkommen zum ${quizName}!`;

  randomizeOrder(questions);

  for (let q of questions) {
    const clone = node.cloneNode(true);
    clone.querySelector('.question-text').textContent = q.question;
    clone.querySelector('.answer-text').textContent = q.answer;
    document.querySelector('.questions-wrap').appendChild(clone);
  }

  // In the end, we remove the template element. It's not needed anymore
  document.querySelector('.questions-wrap').removeChild(node);

  // In case we do NOT have any questions, something went wrong, and we want to show an info about that ... kind of.
} else {
  node.querySelector('.question-text').textContent = 'Wie bist du hierhergekommen?! Das ist keine valide Quiz-Seite!';
  node.querySelector('.answer-text').textContent =
    'Naja, da du das getan hast, weiß ich da keine rechte Antwort, aber ich habe ein zwei Theorien: Theorie 1, wir haben die Verlinkung unter einem Video verbaselt (upsie), in dem Fall freuen wir uns über Feedback. Theorie 2, du warst neugierig, was passiert, wenn du den Query Parameter oben verändert. Na, nun hast du es rausgefunden. Ein Hoch auf die Neugier! 🎉';
}
/*
 * To reveal all answers, we add a new class to every Element that has the class "answer" and is a descendant of an element with class "question"
 * You'll learn more about selectors in the CSS course :)
 */
function revealAnswers() {
  const answers = document.querySelectorAll('.question .answer');

  answers.forEach(a => {
    a.className += ' ' + REVEAL_CLASSNAME;
  });

  // After revealing the answers, we want to scroll back to the top
  // We need to do that with an "instant timeout" to make sure the code above is executed, otherwise the scroll doesnt work sometimes
  // That sounds like I know what I am doing, but honestly, if there's some race-condition/hard to reproduce/random error ...
  // ... at some point, I always put a setTimeout(fn, 0) around it 🤷‍♂️
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, 0);
}

/* reveal one specific answer by a button click - we need to access the parent of the button here, because that's the answer element*/
function toggleAnswerReveal(btnEl) {
  btnEl.offsetParent.classList.toggle(REVEAL_CLASSNAME);
}

/* This is some mathematican magic I copy-pasted from https://stackoverflow.com/a/12646864
 * to randomize the order of the question array.
 * PLEASE NOTE: When copy-pasting code from somewhere, always read through it AND MAKE SURE YOU UNDERSTAND IT before running it!
 * You have been warned - and I mean it!
 */
function randomizeOrder(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
