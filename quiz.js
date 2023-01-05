//const questions = require(questions).quiz1;

const questions = quiz2;

const node = document.querySelector('.question');
for (let q of questions) {
  const clone = node.cloneNode(true);
  clone.querySelector('.question-text').textContent = q.question;
  clone.querySelector('.answer-text').textContent = q.answer;
  document.querySelector('.questions-wrap').appendChild(clone);
}

console.log(node);
document.querySelector('.questions-wrap').removeChild(node);

function revealAnswers() {
  const answers = document.querySelectorAll('.question .answer');

  answers.forEach(a => {
    a.className += ' revealed';
  });
}
