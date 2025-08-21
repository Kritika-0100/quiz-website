const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');

const subjectSection = document.querySelector(".subject-section");
const subjectCards = document.querySelectorAll(".subject-card");

let questionCount = 0;
let questionNum = 1;
let userScore = 0;

let currentQuestions = [];  // ✅ active question bank
let selectedSubject = null;


// ========== HOME / POPUP ==========
startBtn.onclick = () => {
  popupInfo.classList.add('active');
  main.classList.add('active');
};

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
};

continueBtn.onclick = () => {
  popupInfo.classList.remove('active');
  main.classList.remove('active');
  subjectSection.classList.add('active'); // show subjects instead of quiz
};


// ========== SUBJECT SELECTION ==========
subjectCards.forEach(card => {
  card.onclick = () => {
    selectedSubject = card.getAttribute("data-subject"); 
    currentQuestions = questionBank[selectedSubject]; // 🔥 load subject-specific Qs

    subjectSection.classList.remove('active');
    quizSection.classList.add('active');
    quizBox.classList.add('active');

    // reset values for new quiz
    questionCount = 0;
    questionNum = 1;
    userScore = 0;

    showQuestions(questionCount);
    questionCounter(questionNum);
    headerScore();
  };
});


// ========== QUIZ LOGIC ==========
nextBtn.onclick = () => {
  if (questionCount < currentQuestions.length - 1) {
    questionCount++;
    showQuestions(questionCount); 
    
    questionNum++;
    questionCounter(questionNum);

    nextBtn.classList.remove('active');
  } else {
    showResultBox();
  }
};


// render question + options
function showQuestions(index) {
  const questionText = document.querySelector('.question-text');
  questionText.textContent = `${currentQuestions[index].num}. ${currentQuestions[index].ques}`;

  let optionTag = `
    <div class="option"><span>${currentQuestions[index].options[0]}</span></div>
    <div class="option"><span>${currentQuestions[index].options[1]}</span></div>
    <div class="option"><span>${currentQuestions[index].options[2]}</span></div>
    <div class="option"><span>${currentQuestions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll('.option');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}


function optionSelected(ans) {
  const options = optionList.children;
  let userAns = [...options].indexOf(ans);   // index of clicked
  let correctAns = currentQuestions[questionCount].ans; // ✅ subject-specific
  let allOptions = optionList.children.length;

  if (userAns === correctAns) {
    ans.classList.add('correct');
    userScore += 1;
    headerScore();
  } else {
    ans.classList.add('incorrect');
    options[correctAns].classList.add('correct'); // auto-show correct
  }

  // disable all after click
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }

  nextBtn.classList.add('active');
}


// counter + score UI
function questionCounter(index) {
  const questionTotal = document.querySelector('.question-total');
  questionTotal.textContent = `${index} of ${currentQuestions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `Score: ${userScore} / ${currentQuestions.length}`;
}


// ========== RESULT BOX ==========
function showResultBox() {
  quizBox.classList.remove('active');
  resultBox.classList.add('active');

  const scoreText = document.querySelector('.score-text');
  scoreText.textContent = `Your Score ${userScore} out of ${currentQuestions.length}`;

  const circularProgress = document.querySelector('.circular-progress');
  const progressValue = document.querySelector('.progress-value');
  let progressStartValue = -1;
  let progressEndValue = (userScore / currentQuestions.length) * 100;
  let speed = 20;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#086c0ccd ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1)0deg)`;
    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}


// ========== TRY AGAIN & HOME ==========
tryAgainBtn.onclick = () => {
  quizBox.classList.add('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  questionCount = 0;
  questionNum = 1;
  userScore = 0;

  showQuestions(questionCount);  
  questionCounter(questionNum);
  headerScore();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove('active');
  nextBtn.classList.remove('active');
  resultBox.classList.remove('active');

  questionCount = 0;
  questionNum = 1;
  userScore = 0;

  // subjectSection.classList.add("active"); // back to subject selection
};
