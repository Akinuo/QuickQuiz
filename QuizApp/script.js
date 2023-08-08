const quizData = [
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Mercury",
        correct: "b",
    },
    {
        question: "What is the chemical symbol for silver?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Cu",
        correct: "b",
    },
    {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        a: "Jane Austen",
        b: "Charles Dickens",
        c: "Mark Twain",
        d: "Leo Tolstoy",
        correct: "a",
    },
    {
        question: "What is the smallest prime number?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
    },
    {
        question: "Which famous scientist developed the theory of general relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        correct: "b",
    },
    {
        question: "What is the chemical symbol for iron?",
        a: "Ir",
        b: "Ag",
        c: "Fe",
        d: "Cu",
        correct: "c",
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Niels Bohr",
        correct: "b",
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        a: "Photosynthesis",
        b: "Respiration",
        c: "Transpiration",
        d: "Fertilization",
        correct: "a",
    },
    {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        correct: "a",
    },
    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "b",
    },
    {
        question: "Which famous scientist is credited with discovering the law of gravity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Nikola Tesla",
        correct: "a",
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Mercury",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Cu",
        correct: "a",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "William Shakespeare",
        b: "Jane Austen",
        c: "Charles Dickens",
        d: "Mark Twain",
        correct: "a",
    },
    {
        question: "What is the largest mammal on Earth?",
        a: "Elephant",
        b: "Giraffe",
        c: "Blue Whale",
        d: "Hippopotamus",
        correct: "c",
    },
    {
        question: "Which gas do plants release during photosynthesis?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for helium?",
        a: "He",
        b: "H",
        c: "O",
        d: "Ne",
        correct: "a",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correct: "c",
    },
    {
        question: "What is the largest organ in the human body?",
        a: "Brain",
        b: "Liver",
        c: "Skin",
        d: "Heart",
        correct: "c",
    },
    {
        question: "Which gas do plants primarily use during photosynthesis?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "b",
    },
    {
        question: "Who wrote the novel '1984'?",
        a: "George Orwell",
        b: "Aldous Huxley",
        c: "J.R.R. Tolkien",
        d: "F. Scott Fitzgerald",
        correct: "a",
    },
    {
        question: "What is the capital of Japan?",
        a: "Beijing",
        b: "Tokyo",
        c: "Seoul",
        d: "Bangkok",
        correct: "b",
    },
    {
        question: "What is the chemical symbol for oxygen?",
        a: "O",
        b: "Ox",
        c: "Om",
        d: "On",
        correct: "a",
    },
    {
        question: "Who wrote the tragedy play 'Hamlet'?",
        a: "William Shakespeare",
        b: "Jane Austen",
        c: "Charles Dickens",
        d: "Mark Twain",
        correct: "a",
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Mars",
        b: "Venus",
        c: "Jupiter",
        d: "Mercury",
        correct: "d",
    },
    {
        question: "What is the chemical symbol for nitrogen?",
        a: "N",
        b: "Ni",
        c: "Ne",
        d: "Na",
        correct: "a",
    },
    {
        question: "Who is known as the 'Father of Modern Chemistry'?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Antoine Lavoisier",
        correct: "d",
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        a: "Africa",
        b: "Europe",
        c: "Asia",
        d: "South America",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for carbon?",
        a: "Ca",
        b: "Co",
        c: "Cr",
        d: "C",
        correct: "d",
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correct: "d",
    },
    {
        question: "What is the capital of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Brisbane",
        d: "Canberra",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let questionCounter = 0;
const usedQuestions = new Set(); // Keep track of used question indices

loadQuiz();

function loadQuiz() {
    if (questionCounter < 10) {
        deselectAnswers();

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quizData.length);
        } while (usedQuestions.has(randomIndex));

        usedQuestions.add(randomIndex);
        questionCounter++;

        const currentQuizData = quizData[randomIndex];

        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    } else {
        quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${questionCounter} questions.</h2>
            <button onclick="location.reload()">Reload</button>
        `;
    }
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length && questionCounter < 10) {
            loadQuiz();
        } else {
            loadQuiz();
        }
    }
});

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
