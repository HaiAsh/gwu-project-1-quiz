let quizQuestions = [
    {
        question: "What is the capital of U.S.A.?",
        answers: ["New York City", "Miami", "Cleveland", "Washington D.C."],
        correctAnswer: "Washington D.C."
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Pb", "Fe"],
        correctAnswer: "Au"
    }
];


const quiz = document.getElementById("myQuiz");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const questionText = document.getElementById("questionText");
const answersList = document.getElementById("answersList");
const resultMessage = document.getElementById("resultMessage");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;


