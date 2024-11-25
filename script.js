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

btn.onclick = function() {
    quiz.style.display = "block";
    loadQuestion(currentQuestionIndex); // Load the first question when the modal is opened
}
span.onclick = function() {
    quiz.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == quiz) {
        quiz.style.display = "none";
    }
}
function loadQuestion(index) {
    if (index < quizQuestions.length) {
        // Display the current question
        questionText.textContent = quizQuestions[index].question;
        answersList.innerHTML = ''; // Clear any previous answers

        // Display answers as radio buttons
        quizQuestions[index].answers.forEach(answer => {
            const li = document.createElement("li");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "answer"; // Ensure the same name to group the answers
            radio.value = answer;
            li.appendChild(radio);
            li.appendChild(document.createTextNode(answer));
            answersList.appendChild(li);
        });

        // Hide the result message when a new question is loaded
        resultMessage.style.display = "none";
    }
}
// Handle the submission of the answer
nextButton.onclick = function() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

        // Check if the answer is correct
        if (userAnswer === correctAnswer) {
            score++;
            resultMessage.textContent = "Correct!";
        } else {
            resultMessage.textContent = `Incorrect! The correct answer was: ${correctAnswer}`;
        }

        resultMessage.style.display = "block"; // Show the result

        // Move to the next question or end the quiz
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            nextButton.textContent = "Next Question"; // Change button text for the next question
        } else {
            nextButton.textContent = "Finish Quiz"; // Show finish message at the end
            nextButton.onclick = function() {
                showFinalScore();
            };
        }
    } else {
        alert("Please select an answer!");
    }
};

// Show the final score
function showFinalScore() {
    questionText.textContent = `Quiz Complete! You scored ${score} out of ${quizQuestions.length}`;
    answersList.innerHTML = ''; // Clear answers
    nextButton.style.display = "none"; // Hide the next button
    resultMessage.style.display = "none"; // Hide the result message
}

console.log(btn);  // Should print the button element
console.log(quiz); // Should print the modal element
