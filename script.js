
let computerScore = 0;
let humanScore = 0;

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

// function getHumanChoice() {
//       let humanInput = "";
//       while (humanInput != "rock" && humanInput != "paper" && humanInput != "scissors") {
//             humanInput = prompt("Please enter either 'rock', 'paper', or 'scissors'");
//             humanInput = humanInput.toLowerCase();
//       }
//       return humanInput;
// }

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
            console.log(`You win, because ${humanChoice} beats ${computerChoice}!`);
            humanScore ++;
      }
      else {
            console.log(`You lose, because ${computerChoice} beats ${humanChoice}!`)
            computerScore ++;
      }
}

function playGame() {
      computerScore = 0;
      humanScore = 0;
      
      const buttonRock = document.createElement("button");
      const buttonPaper = document.createElement("button");
      const buttonScissors = document.createElement("button");

      buttonRock.textContent = "Rock";
      buttonPaper.textContent = "Paper";
      buttonScissors.textContent = "Scissors";

      document.body.appendChild(buttonRock);
      document.body.appendChild(buttonPaper);
      document.body.appendChild(buttonScissors);




      // buttonRock.addEventListener("click", () => {
      //       playRound("rock", computerSelection);
      // })


      // buttonPaper.addEventListener("click", () => {
      //       playRound("paper", computerSelection);
      // })


      // buttonScissors.addEventListener("click", () => {
      //       playRound("scissors", computerSelection)
      // })

      while (humanScore < 5 || computerScore < 5) {

            buttonRock.addEventListener("click", () => {
                  const computerSelection = getComputerChoice();
                  playRound("rock", computerSelection);
            })
      
      
            buttonPaper.addEventListener("click", () => {
                  const computerSelection = getComputerChoice();
                  playRound("paper", computerSelection);
            })
      
      
            buttonScissors.addEventListener("click", () => {
                  const computerSelection = getComputerChoice();
                  playRound("scissors", computerSelection);
            })
            
      
      }

//THE CODE DOES NOT WORK!

      
      console.log("--------------------");
      
      console.log("FINAL RESULTS:")
      console.log("The computer's score is " + computerScore);
      console.log("Your score is " + humanScore);
      if (computerScore > humanScore) {
            return 'The computer won the game!';
      }
      else if (humanScore > computerScore) {
            return 'You won the game!';
      }
      else {
            return 'The game is a tie!';
      }
}

console.log(playGame());