const questionCard = document.getElementById("questionCard");
const feedback = document.getElementById("feedback");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const showBtn = document.getElementById("showBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const topicSelect = document.getElementById("topicSelect");
const countSelect = document.getElementById("countSelect");
const difficultySelect = document.getElementById("difficultySelect");
const summary = document.getElementById("summary");
const scoreText = document.getElementById("scoreText");
const weakTopics = document.getElementById("weakTopics");
const restartBtn = document.getElementById("restartBtn");

const QUESTION_BANK = window.QUESTION_BANK || [];
let pool = [...QUESTION_BANK];
let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let mistakes = {};

const normalize = (value) => value.toString().trim().toLowerCase();

if (!QUESTION_BANK.length) {
  feedback.className = "feedback error";
  feedback.textContent = "No se cargaron preguntas. Verifica questions.js.";
  feedback.style.display = "block";
}

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const buildActiveQuestions = () => {
  const topic = topicSelect.value;
  const difficulty = difficultySelect.value;
  const countValue = countSelect.value;

  let filtered = [...pool];
  if (topic !== "all") {
    filtered = filtered.filter((q) => q.topic === topic);
  }
  if (difficulty !== "all") {
    filtered = filtered.filter((q) => q.difficulty === difficulty);
  }

  if (countValue !== "all") {
    const count = Number(countValue);
    filtered = filtered.slice(0, count);
  }

  activeQuestions = filtered.length ? filtered : [...pool];
  currentIndex = 0;
  score = 0;
  answered = false;
  mistakes = {};
  summary.hidden = true;
  renderQuestion();
};

const renderQuestion = () => {
  const total = activeQuestions.length;
  if (!total) return;

  const question = activeQuestions[currentIndex];
  answered = false;
  nextBtn.disabled = true;
  feedback.className = "feedback";
  feedback.textContent = "";
  feedback.style.display = "none";

  progressText.textContent = `Pregunta ${currentIndex + 1} de ${total}`;
  progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;

  const meta = `<div class="meta"><span>${question.topic}</span><span>·</span><span>${question.difficulty}</span></div>`;
  const codeBlock = question.code ? `<pre class="code-block">${question.code}</pre>` : "";

  let inputBlock = "";
  if (question.type === "mcq" || question.type === "truefalse") {
    inputBlock = `<div class="options">${question.choices
      .map(
        (choice, index) => `
      <label class="option">
        <input type="radio" name="answer" value="${index}" />
        <span>${choice}</span>
      </label>`
      )
      .join("")}</div>`;
  } else if (question.type === "input") {
    inputBlock = `<input class="input-answer" type="text" id="textAnswer" placeholder="Escribe tu respuesta" autocomplete="off" />`;
  }

  questionCard.innerHTML = `
    ${meta}
    <h3>${question.prompt}</h3>
    ${codeBlock}
    ${inputBlock}
  `;
};

const getUserAnswer = () => {
  const question = activeQuestions[currentIndex];
  if (question.type === "mcq" || question.type === "truefalse") {
    const selected = questionCard.querySelector("input[name='answer']:checked");
    return selected ? Number(selected.value) : null;
  }
  if (question.type === "input") {
    const input = document.getElementById("textAnswer");
    return input ? input.value : "";
  }
  return null;
};

const evaluateAnswer = (forceShow = false) => {
  const question = activeQuestions[currentIndex];
  const userAnswer = getUserAnswer();

  if (!forceShow) {
    if (question.type === "input" && !userAnswer.trim()) {
      feedback.className = "feedback error";
      feedback.textContent = "Escribe una respuesta antes de revisar.";
      feedback.style.display = "block";
      return;
    }
    if ((question.type === "mcq" || question.type === "truefalse") && userAnswer === null) {
      feedback.className = "feedback error";
      feedback.textContent = "Selecciona una opción antes de revisar.";
      feedback.style.display = "block";
      return;
    }
  }

  let isCorrect = false;
  if (!forceShow) {
    if (question.type === "mcq" || question.type === "truefalse") {
      isCorrect = userAnswer === question.answer;
    } else if (question.type === "input") {
      const accepted = Array.isArray(question.answer) ? question.answer : [question.answer];
      isCorrect = accepted.map(normalize).includes(normalize(userAnswer));
    }
  }

  if (forceShow) {
    isCorrect = false;
  }

  const correctText = question.type === "mcq" || question.type === "truefalse"
    ? question.choices[question.answer]
    : question.answerText || question.answer;

  feedback.className = `feedback ${isCorrect ? "success" : "error"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "¡Correcto!" : "Respuesta incorrecta"}</strong><br />
    <span>Respuesta correcta: ${correctText}</span><br />
    <small>${question.explanation}</small>
  `;
  feedback.style.display = "block";

  if (!answered) {
    if (isCorrect) {
      score += 1;
    } else {
      mistakes[question.topic] = (mistakes[question.topic] || 0) + 1;
    }
  }

  answered = true;
  nextBtn.disabled = false;
};

const goNext = () => {
  if (currentIndex < activeQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showSummary();
  }
};

const showSummary = () => {
  summary.hidden = false;
  scoreText.textContent = `${score}/${activeQuestions.length}`;
  weakTopics.innerHTML = "";

  const entries = Object.entries(mistakes);
  if (!entries.length) {
    weakTopics.innerHTML = "<li>Sin temas críticos. ¡Buen trabajo!</li>";
  } else {
    entries
      .sort((a, b) => b[1] - a[1])
      .forEach(([topic, count]) => {
        const item = document.createElement("li");
        item.textContent = `${topic} (errores: ${count})`;
        weakTopics.appendChild(item);
      });
  }

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

checkBtn.addEventListener("click", () => evaluateAnswer(false));
showBtn.addEventListener("click", () => evaluateAnswer(true));
nextBtn.addEventListener("click", goNext);
shuffleBtn.addEventListener("click", () => {
  pool = shuffle(pool);
  buildActiveQuestions();
});

topicSelect.addEventListener("change", buildActiveQuestions);
difficultySelect.addEventListener("change", buildActiveQuestions);
countSelect.addEventListener("change", buildActiveQuestions);
restartBtn.addEventListener("click", buildActiveQuestions);

// Poblar el select de temas
const topics = Array.from(new Set(QUESTION_BANK.map((q) => q.topic)));
topics.forEach((topic) => {
  const opt = document.createElement("option");
  opt.value = topic;
  opt.textContent = topic;
  topicSelect.appendChild(opt);
});

buildActiveQuestions();
