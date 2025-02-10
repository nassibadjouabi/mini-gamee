/// DOM Elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultText = document.getElementById('result-text');
const userScoreElem = document.getElementById('user-score');
const computerScoreElem = document.getElementById('computer-score');
const computerChoiceElem = document.getElementById('computer-choice'); // Nouvel élément
const resetBtn = document.getElementById('reset');

// Game Variables
let userScore = 0;
let computerScore = 0;

// Computer's Random Choice
function getComputerChoice() {
  const choices = ['✊ Rock', '✋ Paper', '✌️ Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Determine the Winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'draw';
  }
  if (
    (userChoice === '✊ Rock' && computerChoice === '✌️ Scissors') ||
    (userChoice === '✋ Paper' && computerChoice === '✊ Rock') ||
    (userChoice === '✌️ Scissors' && computerChoice === '✋ Paper')
  ) {
    return 'user';
  }
  return 'computer';
}

// Update the UI
function updateUI(result, userChoice, computerChoice) {
  computerChoiceElem.textContent = computerChoice; // Affiche le choix de l'ordinateur

  if (result === 'user') {
    userScore++;
    resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else if (result === 'computer') {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  } else {
    resultText.textContent = `It's a draw! You both chose ${userChoice}.`;
  }
  userScoreElem.textContent = userScore;
  computerScoreElem.textContent = computerScore;
}

// Event Listeners for Buttons
rockBtn.addEventListener('click', () => playGame('✊ Rock'));
paperBtn.addEventListener('click', () => playGame('✋ Paper'));
scissorsBtn.addEventListener('click', () => playGame('✌️ Scissors'));

resetBtn.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userScoreElem.textContent = 0;
  computerScoreElem.textContent = 0;
  computerChoiceElem.textContent = '-'; // Réinitialise le choix de l'ordinateur
  resultText.textContent = 'Choose your move!';
});

// Main Game Function
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  updateUI(result, userChoice, computerChoice);
}