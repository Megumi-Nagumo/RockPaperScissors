
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

randomChoice = getComputerChoice();
console.log(randomChoice);

function getHumanChoice(){
    let number = parseInt(prompt("Enter a number from 0 to 2"));
      switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Invalid input";
    }
}

let choice = getHumanChoice();
console.log(choice);

function playRound(humanChoice, computerChoice) {
    let humanInput = humanChoice.toLowerCase();