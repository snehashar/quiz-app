const questions = [
    {
        question: "What is the capital of India?",
        options: ["Berlin", "Delhi", "Paris", "Lisbon"],
        answer: 1 // index of the correct answer
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1 // index of the correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: 2 // index of the correct answer
    },
    {
        question: "What is the value of 16**16?",
        options: ["236", "2566", "156", "256"],
        answer: 3 // index of the correct answer
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Elephant", "Lion", "Tiger", "Bear"],
        answer: 1 // index of the correct answer
    }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", loadQuestion);

function loadQuestion() {
    const q = questions[currentQuestion];
    document.querySelector(".question").textContent = q.question; // Fixed typo
    const answerButtons = document.querySelectorAll(".answer1, .answer2, .answer3, .answer4");

    answerButtons.forEach((button, index) => {
        button.textContent = q.options[index]; // Fixed typo
        button.classList.remove("bg-red-400", "bg-green-400"); // Reset button styles
        button.disabled = false; // Enable buttons
    });

    document.querySelector(".next-btn").classList.add("hidden"); // Hide next button initially
}

document.querySelectorAll(".answer1, .answer2, .answer3, .answer4").forEach((button, index) => {
    button.addEventListener("click", () => {
        checkAnswer(index);
    });
});

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].answer;
    const answerButtons = document.querySelectorAll(".answer1, .answer2, .answer3, .answer4");

    if (selected === correctAnswer) {
        score++;
        answerButtons[selected].classList.add("bg-green-400"); // Correct answer
    } else {
        answerButtons[selected].classList.add("bg-red-400"); // Wrong answer
        answerButtons[correctAnswer].classList.add("bg-green-400"); // Highlight correct answer
    }
    answerButtons.forEach(button => {
        button.disabled = true; // Disable all buttons after selection
    });

    document.querySelector(".next-btn").classList.remove("hidden"); // Show next button
}

document.querySelector(".next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").style.display = 'none'; // Hide quiz
        const resultText = `You scored ${score} out of ${questions.length}`; 
        const resultElement = document.querySelector(".result");
        resultElement.textContent = resultText;
        resultElement.classList.remove("hidden"); // Show result
    }
});