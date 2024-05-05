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
        question: "How many paintings does the Rouen Cathedral series consist of?",
        img: "../assets/catedralRouen.jpg",
        answers: [
            {text: "8", correct: false},
            {text: "15", correct: false},
            {text: "4", correct: false},
            {text: "30", correct: true},
        ]
    },
    {
        question: "In which city did Monet live and paint for many years?",
        img: "../assets/house.jpg",
        answers: [
            {text: "Giverny, France", correct: true},
            {text: "Milan, Italy", correct: false},
            {text: "Paris, France", correct: false},
            {text: "Venice, Italy", correct: false},
        ]
    },
    {
        question: "What art movement did Monet lead?",
        img: "../assets/impressionSunrise.jpg",
        answers: [
            {text: "Renaissance", correct: false},
            {text: "Surrealism", correct: false},
            {text: "Realism", correct: false},
            {text: "Impressionism", correct: true},
        ]
    },
    {
        question: "What is the name of this painting?",
        img: "../assets/estanqueNinfeas.jpg",
        answers: [
            {text: "Lily Garden", correct: false},
            {text: "Swan Lagoon", correct: false},
            {text: "The Nymphaea Pond", correct: true},
            {text: "The Lotus Fountain", correct: false},
        ]
    },
    {
        question: "What is the name of this painting?",
        img: "../assets/liriosDeAgua.jpg",
        answers: [
            {text: "Aquatic Garden", correct: false},
            {text: "Water Lilies", correct: true},
            {text: "Reflections in the water", correct: false},
            {text: "Swan Lake", correct: false},
        ]
    },
    {
        question: "What is the name of this series of paintings?",
        img: "../assets/haystacks.jpg",
        answers: [
            {text: "Houses", correct: false},
            {text: "Fields", correct: false},
            {text: "Haystacks", correct: true},
            {text: "Huts", correct: false},
        ]
    }
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
    if (currentQuestionIndex < 5) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 5!`;

    const restartButton = document.createElement("button");
    restartButton.innerHTML = "RESTART";
    restartButton.classList.add("btn");
    restartButton.addEventListener("click", startTrivia);
    answerButton.appendChild(restartButton);
}

function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

startTrivia();
