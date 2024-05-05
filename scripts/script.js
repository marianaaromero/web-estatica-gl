/*Arreglo */
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

/*Inicia el juego, resetea valores*/ 
function startTrivia() {
    currentQuestionIndex = 0;
    score = 0;
    showStartButton();
}

/*Crea el boton START*/
function showStartButton() {
    resetState();
    questionElement.innerHTML = "Press START to begin!";
    
    const startButton = createButton("START", showQuestion);
    answerButton.appendChild(startButton);
}

/*Crea botones, con un texto dado y lo devuelve*/
function createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.classList.add("btn");
    button.addEventListener("click", clickHandler);
    return button;
}

/*Muesta la pregunta actual y sus cuatro opciones*/
/*Crea los botones correspondientes*/
function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNum}. ${currentQuestion.question}`;
    imageElement.src = currentQuestion.img;

    currentQuestion.answers.forEach(answer => {
        const button = createAnswerButton(answer.text, answer.correct);
        answerButton.appendChild(button);
    });
}

/*Crea un boton de respuesta*/
function createAnswerButton(text, correct) {
    const button = createButton(text, handleAnswer);
    if (correct) {
        button.dataset.correct = true;
    }
    return button;
}

/*Verifica si la respuesta es correcta o incorrecta */
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

/*Muestra la respuesta correcta*/
function showCorrectAnswer() {
    Array.from(answerButton.children).find(button => button.dataset.correct === "true").classList.add("correct");
}

/*Deshabilita los botones*/ 
function disableAnswerButtons() {
    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });
}

/*Muestra la siguiente pregunta*/
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        showQuestion();
    } else {
        showScore();
    }
}

/*Muestra la puntuacion final obtenida*/
/*Crea boton de reinicio*/
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    const restartButton = createButton("RESTART", startTrivia);
    answerButton.appendChild(restartButton);
}

/*Reestablece el juego*/
function resetState() {
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

startTrivia();