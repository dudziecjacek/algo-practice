import { COMPLEXITIES, QUESTIONS } from './questions.js';

// --- state ---------------------------------------------------------------
let deck = [];
let index = 0;
let score = 0;
let selected = { time: null, space: null };
let locked = false;
let easyMode = false;

// --- elements ------------------------------------------------------------
const el = {
  title: document.getElementById('q-title'),
  code: document.getElementById('q-code'),
  qIndex: document.getElementById('q-index'),
  timeOptions: document.getElementById('time-options'),
  spaceOptions: document.getElementById('space-options'),
  check: document.getElementById('check-btn'),
  next: document.getElementById('next-btn'),
  feedback: document.getElementById('feedback'),
  score: document.getElementById('score'),
  progress: document.getElementById('progress'),
  quizCard: document.getElementById('quiz-card'),
  summaryCard: document.getElementById('summary-card'),
  summaryText: document.getElementById('summary-text'),
  restart: document.getElementById('restart-btn'),
  shuffle: document.getElementById('shuffle-toggle'),
  easy: document.getElementById('easy-toggle'),
};

// --- helpers -------------------------------------------------------------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// In easy mode, show 4 options: the correct answer + 3 random distractors.
// `mustInclude` keeps the user's current pick visible when toggling mid-question.
function easySubset(correct, mustInclude) {
  const chosen = new Set([correct]);
  if (mustInclude) chosen.add(mustInclude);
  const pool = shuffle(COMPLEXITIES.filter((c) => !chosen.has(c)));
  while (chosen.size < 4 && pool.length) chosen.add(pool.pop());
  return shuffle([...chosen]);
}

function optionsFor(dimension) {
  const q = deck[index];
  if (!easyMode) return COMPLEXITIES;
  return easySubset(q[dimension], selected[dimension]);
}

function buildOptions(container, dimension) {
  container.innerHTML = '';
  for (const c of optionsFor(dimension)) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'opt';
    btn.textContent = c;
    btn.dataset.value = c;
    btn.dataset.dimension = dimension;
    btn.addEventListener('click', () => onSelect(dimension, c, btn));
    container.appendChild(btn);
  }
}

function onSelect(dimension, value, btn) {
  if (locked) return;
  selected[dimension] = value;
  const group = dimension === 'time' ? el.timeOptions : el.spaceOptions;
  for (const b of group.children) b.classList.toggle('selected', b === btn);
  el.check.disabled = !(selected.time && selected.space);
}

function renderQuestion() {
  const q = deck[index];
  locked = false;
  selected = { time: null, space: null };

  el.title.textContent = q.title;
  el.code.textContent = q.code;
  el.qIndex.textContent = `#${q.id}`;
  el.progress.textContent = `${index + 1} / ${deck.length}`;
  el.score.textContent = String(score);

  buildOptions(el.timeOptions, 'time');
  buildOptions(el.spaceOptions, 'space');

  el.check.disabled = true;
  el.check.hidden = false;
  el.next.hidden = true;
  el.feedback.hidden = true;
  el.feedback.className = 'feedback';
}

function markGroup(container, correct, chosen) {
  for (const b of container.children) {
    b.disabled = true;
    b.classList.remove('selected');
    if (b.dataset.value === correct) b.classList.add('correct');
    else if (b.dataset.value === chosen) b.classList.add('wrong');
  }
}

function checkAnswer() {
  if (locked) return;
  locked = true;
  const q = deck[index];

  const timeOk = selected.time === q.time;
  const spaceOk = selected.space === q.space;

  markGroup(el.timeOptions, q.time, selected.time);
  markGroup(el.spaceOptions, q.space, selected.space);

  if (timeOk && spaceOk) score += 1;
  el.score.textContent = String(score);

  const bothOk = timeOk && spaceOk;
  el.feedback.hidden = false;
  el.feedback.classList.add(bothOk ? 'pass' : 'fail');
  el.feedback.innerHTML = `
    <div class="verdict">${
      bothOk
        ? '✓ Correct on both!'
        : `✗ ${[!timeOk && 'time', !spaceOk && 'space']
            .filter(Boolean)
            .join(' and ')} was off.`
    }</div>
    <div class="why"><b>Time — ${q.time}.</b> ${q.timeWhy}</div>
    <div class="why"><b>Space — ${q.space}.</b> ${q.spaceWhy}</div>
  `;

  el.check.hidden = true;
  el.next.hidden = false;
  el.next.textContent = index + 1 < deck.length ? 'Next →' : 'See results →';
  el.next.focus();
}

function nextQuestion() {
  index += 1;
  if (index >= deck.length) {
    showSummary();
    return;
  }
  renderQuestion();
}

function showSummary() {
  el.quizCard.hidden = true;
  el.summaryCard.hidden = false;
  const pct = Math.round((score / deck.length) * 100);
  el.summaryText.textContent = `You scored ${score} / ${deck.length} (${pct}%) — both time and space had to be right to count.`;
}

function start() {
  score = 0;
  index = 0;
  easyMode = el.easy.checked;
  deck = el.shuffle.checked ? shuffle(QUESTIONS) : QUESTIONS.slice();
  el.summaryCard.hidden = true;
  el.quizCard.hidden = false;
  renderQuestion();
}

// Re-render the current question's options for the new mode, keeping any
// selection. Only runs before the answer is checked; once locked, the graded
// view is left alone and the new mode takes effect on the next question.
function rebuildOptions() {
  buildOptions(el.timeOptions, 'time');
  buildOptions(el.spaceOptions, 'space');
  reapplySelection(el.timeOptions, 'time');
  reapplySelection(el.spaceOptions, 'space');
  el.check.disabled = !(selected.time && selected.space);
}

function reapplySelection(container, dimension) {
  const value = selected[dimension];
  if (!value) return;
  let shown = false;
  for (const b of container.children) {
    const match = b.dataset.value === value;
    b.classList.toggle('selected', match);
    if (match) shown = true;
  }
  if (!shown) selected[dimension] = null; // pick fell out of the visible set
}

// --- wire up -------------------------------------------------------------
el.check.addEventListener('click', checkAnswer);
el.next.addEventListener('click', nextQuestion);
el.restart.addEventListener('click', start);
el.easy.addEventListener('change', () => {
  easyMode = el.easy.checked;
  if (!locked) rebuildOptions();
});

start();
