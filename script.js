const leftChoiceImg = document.getElementById('left-choice');
const rightChoiceImg = document.getElementById('right-choice');
const scoreDisplay = document.getElementById('score');
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');

let leftScore = 0;
let rightScore = 0;


const choices = ['rock', 'paper', 'scissors', 'heart'];


function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function updateScore() {
    scoreDisplay.textContent = `${leftScore}:${rightScore}`;
}

function playRound() {
    const leftChoice = getRandomChoice();
    const rightChoice = getRandomChoice();

    leftChoiceImg.src = `assets/${leftChoice}.png`;
    rightChoiceImg.src = `assets/${rightChoice}.png`;

    if (leftChoice === rightChoice) {

    } else if (
        (leftChoice === 'rock' && rightChoice === 'scissors') ||
        (leftChoice === 'scissors' && rightChoice === 'paper') ||
        (leftChoice === 'paper' && rightChoice === 'rock')
    ) {

        leftScore++;
    } else if (leftChoice === 'heart') {

        leftScore++;
    } else {

        rightScore++;
    }

    updateScore();
}

// Function to reset the game
function resetGame() {
    leftScore = 0;
    rightScore = 0;
    updateScore();
    leftChoiceImg.src = 'assets/default.png';
    rightChoiceImg.src = 'assets/default.png';
}

// Event listeners for buttons
playButton.addEventListener('click', playRound);
resetButton.addEventListener('click', resetGame);

// Initialize the game
resetGame();
