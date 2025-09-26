

const choices = ['rock', 'paper', 'scissors'];


function getHumanChoice(){
    // 2) user choice with prompt
    let input= prompt("Enter Rock, Paper, or Scissors: ");

    while (input === null) {
        input = prompt("Enter Rock, Paper, or Scissors: ");
    }
    
    input = input.toLowerCase();
    let check = choices.includes(input);


    while (check === false) {
        input = prompt("Enter Rock, Paper, or Scissors correctly, but capitalization doesn't matter: ");
        input = input.toLowerCase();
        check = choices.includes(input);

        while (input === null) {
        input = prompt("Enter Rock, Paper, or Scissors: ");
    }
    
    input = input.toLowerCase();
    check = choices.includes(input);
    }


    if (input === "rock" || input === "paper" || input  === "scissors") {
        return input;
    } else {
    
        return getHumanChoice();
        
    }
    
}

let userChoice = getHumanChoice();
console.log('User choice: ' + userChoice);


function getComputerChoice() {
    // 1) computer choice from array
    
    return choices[Math.floor(Math.random() * choices.length)];

}

let randomChoice = getComputerChoice();
console.log('Computer choice: ' + randomChoice);




function playRound() {
    // 3) compare choices 
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const winner = checkWinner(humanChoice, computerChoice);
    console.log(`User choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(winner);
    console.log('-------------------');

    return winner;
}

function checkWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "User wins!";
    } else {
        return "Computer wins!";
    }
}
  

function startGame() {
    // start game function & loop 5 rounds

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("Game over! Thanks for playing.");

}



