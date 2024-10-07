function getComputerChoice() {
      let randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber == 0) {
            return 'rock';
      }
      else if (randomNumber == 1) {
            return 'paper';
      }
      else {
            return 'scissors';
      }
}

function getHumanChoice() {
      let humanInput = "";
      while (humanInput != "rock" && humanInput != "paper" && humanInput != "scissors") {
            humanInput = prompt("Please enter either 'rock', 'paper', or 'scissors'");
            humanInput = humanInput.toLowerCase();
      }
      return humanInput;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
      const gameRules = {
            "rock": "scissors",
            "scissors": "paper",
            "paper": "rock"
      };
      if (computerChoice == humanChoice) {
            console.log('The game is a tie!');
      }
      else if (gameRules[humanChoice] == computerChoice) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore ++;
      }
      else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore ++;
      }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

// function game() {
// 
      // for (let i = 0; i < 5; i++) {
            // let computerSelection = getComputerChoice();
            // let playerSelection = getHumanChoice();
            // console.log("You choose " + playerSelection);
            // console.log("The computer chooses " + computerSelection);
            // let result = playRound(playerSelection, computerSelection);
            // console.log(result);
            // console.log("--------------------");
            // if (result[4] == 'c') {
                  // computerScore++;
            // }
            // else if (result[4] == 'w') {
                  // humanScore++;
            // }
            // else {
                  // console.log("Replay this round!");
                  // console.log("--------------------");
                  // i--;
            // }
      // }
      // console.log("FINAL RESULTS:")
      // console.log("The computer's score is " + computerScore);
      // console.log("Your score is " + humanScore);
      // if (computerScore > humanScore) {
            // return 'The computer won the game!';
      // }
      // else if (humanScore > computerScore) {
            // return 'You won the game!';
      // }
      // else {
            // return 'The game is a tie!';
      // }
// }
// 
// console.log(game());