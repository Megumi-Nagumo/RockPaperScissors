

const choices = ['rock', 'paper', 'scissors'];
const winners = [];


function startGame() {
    // start game function & loop 5 rounds

    for (let i = 1; i < 6; i++) {
        playRound(i);
    }
    document.querySelector('.button').textContent = "Play Again";
    console.log("Game over! Thanks for playing.");
    logWins();
   
}


function playRound(round) {
    // 3) compare choices 
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const winner = checkWinner(humanChoice, computerChoice);

    winners.push(winner)
    
    logRound(humanChoice, computerChoice, winner, round);
}




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



function getComputerChoice() {
    // 1) computer choice from array
    
    return choices[Math.floor(Math.random() * choices.length)];

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
  
function logWins() {
    let userWins = winners.filter(winner => winner === "User wins!").length;
    let computerWins = winners.filter(winner => winner === "Computer wins!").length;
    let ties = winners.filter(winner => winner === "It's a tie!").length;

    console.log("Final Results:");
    console.log(`User won ${userWins} times.`);
    console.log(`Computer won ${computerWins} times.`);
    console.log(`There were ${ties} ties.`);

}

function logRound(humanChoice, computerChoice, winner, round) {
    console.log(`Round ${round}:`);
    console.log(`User choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(winner);
    console.log('-------------------');
}
