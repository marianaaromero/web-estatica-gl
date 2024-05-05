const questions = [
    {
        question: "Where was Claude Monet born?",
        img: "../assets/monet.jpeg",
        answers: [
            {text: "Paris, France", correct: true},
            {text: "Milan, Italy", correct: false},
            {text: "Madrid, Spain", correct: false},
            {text: "Lisbon, Portugal", correct: false},
        ]
    },
    {
        question: "What is the name of this painting?",
        img: "../assets/lunchOnThegrass.jpg",
        answers: [
            {text: "Picnic in the park", correct: false},
            {text: "Tea with friends", correct: false},
            {text: "Lunch on the grass", correct: true},
            {text: "Brunch in the park", correct: false},
        ]
    },
    {
        question: "Where was Claude Monet born?",
        img: "../assets/catedralRouen.jpg",
        answers: [
            {text: "Paris, France", correct: true},
            {text: "Milan, Italy", correct: false},
            {text: "Madrid, Spain", correct: false},
            {text: "Lisbon, Portugal", correct: false},
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const imageElement = document.getElementById("question-image");


function startTrivia() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(); 
}

function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNum}. ${currentQuestion.question}`;
    
    const imageElement = document.getElementById("question-image");
    imageElement.src = currentQuestion.img;

    currentQuestion.answers.forEach(answer => {
        const button = createAnswerButton(answer.text, answer.correct);
        answerButton.appendChild(button);
    });
}

function createAnswerButton(text, correct) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.classList.add("btn");
    if (correct) {
        button.dataset.correct = true;
    }
    button.addEventListener("click", handleAnswer);
    return button;
}

function handleAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        showCorrectAnswer();
    }

    disableAnswerButtons();
    setTimeout(showNextQuestion, 2000);
}

function showCorrectAnswer() {
    Array.from(answerButton.children).find(button => button.dataset.correct === "true").classList.add("correct");
}

function disableAnswerButtons() {
    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

startTrivia();
