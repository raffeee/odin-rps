let gameRunning = true;
let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector('#player-score > span.score')
const computerScoreDisplay = document.querySelector('#computer-score > span.score')
const roundResult = document.querySelector('span.result');

const choice = ['rock', 'paper', 'scissors']

const choices = document.querySelectorAll('.choice')

choices.forEach(option => {
  option.addEventListener('click', () => {
    if (gameRunning) {
      let match = playRound(option.id, getComputerChoice());
      if (match === 1) {
        playerScore++
        playerScoreDisplay.textContent = playerScore
      } else if (match === -1) {
        computerScore++
        computerScoreDisplay.textContent = computerScore
      }
      if (playerScore == 5) {
        roundResult.textContent = 'Winner: Player!'
        gameRunning = false;
      } else if (computerScore == 5) {
        roundResult.textContent = 'Winner: Computer!'
        gameRunning = false;
      }
    }
  });
})

function getComputerChoice() {
  let comOption = Math.floor(Math.random() * choice.length);
  return choice[comOption];
}

function playRound(playerSelection, computerSelection) {
  const playerOption = playerSelection.toLowerCase();
  const results = [
    `It's A Draw!`,
    `You Win! ${playerOption} beats ${computerSelection}`,
    `You Lose! ${computerSelection} beats ${playerOption}`
  ]
  // 0 = Draw, 1 = PlayerWin; -1 = CompWin
  if (playerOption === computerSelection) {
    roundResult.textContent = results[0]
    return 0;
  } else if (playerOption === choice[0]) {
    if (computerSelection === choice[1]) {
      roundResult.textContent = results[2]
      return -1
    } else {
      roundResult.textContent = results[1]
      return 1
    }
  } else if (playerOption === choice[1]) {
    if (computerSelection === choice[2]) {
      roundResult.textContent = results[2]
      return -1
    } else {
      roundResult.textContent = results[1]
      return 1
    }
  } else if (playerOption === choice[2]) {
    if (computerSelection === choice[0]) {
      roundResult.textContent = results[2]
      return -1
    } else {
      roundResult.textContent = results[1]
      return 1
    }
  }
}

function reset() {
  gameRunning = true;
  playerScore = 0;
  computerScore = 0;
}
