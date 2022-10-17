const choice = ['rock', 'paper', 'scissors']

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
    console.log(results[0]);
    return 0;
  } else if (playerOption === choice[0]) {
    if (computerSelection === choice[1]) {
      console.log(results[2])
      return -1
    } else {
      console.log(results[1])
      return 1
    }
  } else if (playerOption === choice[1]) {
    if (computerSelection === choice[2]) {
      console.log(results[2])
      return -1
    } else {
      console.log(results[1])
      return 1
    }
  } else if (playerOption === choice[2]) {
    if (computerSelection === choice[0]) {
      console.log(results[2])
      return -1
    } else {
      console.log(results[1])
      return 1
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let player = prompt("Rock, Paper, Scissors, shoot!")
    let match = playRound(player, getComputerChoice())
    if (match === 1) {
      playerScore++
    } else if (match === -1) {
      computerScore++
    }
  }
  return playerScore === computerScore
  ? "No Contest"
  : playerScore > computerScore
    ? `Winner: Player!`
    : `Winner: Computer!`
}

const choices = document.querySelectorAll('.choice')

choices.forEach(option => {
  option.addEventListener('click', () => {
    playRound(option.id, getComputerChoice());
  });
})
