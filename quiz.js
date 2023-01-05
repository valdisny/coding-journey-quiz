const REVEAL_CLASSNAME = 'revealed';

// ===== Load the questions =====
// TODO Load questions depending on calling URL
let questions = quiz2;
randomizeOrder(questions);

// ==== Filling the page with questions ====

/* The initial HTML is containing a template HTML Element with the class "question". The following code
 * - Greps the Element
 * - Duplicates it for every question we have and fills in the question/answer text
 * - Adds the duplicated (new) HTML element to the div with class "questions-wrap", that should contain all our questions
 */
const node = document.querySelector('.question');

for (let q of questions) {
  const clone = node.cloneNode(true);
  clone.querySelector('.question-text').textContent = q.question;
  clone.querySelector('.answer-text').textContent = q.answer;
  document.querySelector('.questions-wrap').appendChild(clone);

  // We add an EventListener to the answer field that tells us when the Element is clicked, so we're able to
  // reveal or hide the answer
  clone.querySelector('.answer').addEventListener('click', event => {
    console.log(event);
    const el = event.target;

    el.classList.toggle(REVEAL_CLASSNAME);
  });
}

// In the end, we remove the template element. It's not needed anymore
document.querySelector('.questions-wrap').removeChild(node);

/*
 * To reveal all answers, we add a new class to every Element that has the class "answer" and is a descendant of an element with class "question"
 * You'll learn more about selectors in the CSS course :)
 */
function revealAnswers() {
  const answers = document.querySelectorAll('.question .answer');

  answers.forEach(a => {
    a.className += ' ' + REVEAL_CLASSNAME;
  });
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
