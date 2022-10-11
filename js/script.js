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

  if (playerOption === computerSelection) {
    return results[0];
  } else if (playerOption === choice[0]) {
    if (computerSelection === choice[1]) {
      return results[2]
    } else {
      return results[1]
    }
  } else if (playerOption === choice[1]) {
    if (computerSelection === choice[2]) {
      return results[2]
    } else {
      return results[1]
    }
  } else if (playerOption === choice[2]) {
    if (computerSelection === choice[0]) {
      return results[2]
    } else {
      return results[1]
    }
  }
}
