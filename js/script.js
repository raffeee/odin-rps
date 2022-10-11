const choice = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let comOption = Math.floor(Math.random() * choice.length);
  return choice[comOption];
}
