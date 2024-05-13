//final project who else feeling devious???

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");


const questions = [
    {
        question: "What year was Roblox released?",
        options: ["2005", "2006", "2007", "2008"],
        answer: "2006"
    },
    {
        question: "Back in the day, who was the automatic first friend on ROBLOX?",
        options: ["Roblox", "Builderman", "John Doe", "Erik Cassel"],
        answer: "Builderman"
    },
    {
        question: "Who is the CEO of Roblox Corp?",
        options: ["David Baszucki", "Erik Cassel", "Andreessen Horowitz", "Franklin Templeton"],
        answer: "David Baszucki"
    },
    {
        question: "What is the currency used in Roblox?",
        options: ["Robux", "RoDollars", "Robucks", "Money"],
        answer: "Robux"
    },
    {
        question: "What day is John Doe returning?",
        options: ["August 10", "October 16", "March 18", "March 23"],
        answer: "March 18"
    }
];

let currentQuestion = 0;
let score = 0;


function questiondisplay() {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkanswa(option));
        optionsElement.appendChild(optionButton);
    });
    scoreElement.textContent = `Score: ${score}`;
}

function checkanswa(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score += 1;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questiondisplay();
    } else {
        alert(`It's over! Please had enjoyed the game. Your score is ${score}. Wow!`);
    }
}

questiondisplay();
