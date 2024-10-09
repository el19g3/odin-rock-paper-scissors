
let computerScore = 0;
let humanScore = 0;

//Set the DOM elements
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissors);


let resultsDiv = document.createElement("div");
resultsDiv.textContent ="";
resultsDiv.style.whiteSpace = "pre-wrap";
document.body.appendChild(resultsDiv);



//Set the functions
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


function playRound(humanChoice, computerChoice) {
      const gameRules = {
            "rock": "scissors",
            "scissors": "paper",
            "paper": "rock"
      };
      if (computerChoice == humanChoice) {
            resultsDiv.textContent += '\nThe game is a tie!';
      }
      else if (gameRules[humanChoice] == computerChoice) {
            resultsDiv.textContent += `\nYou win, because ${humanChoice} beats ${computerChoice}!`;
            humanScore ++;
      }
      else {
            resultsDiv.textContent += `\nYou lose, because ${computerChoice} beats ${humanChoice}!`;
            computerScore ++;
      }
}


function finalResults() {
      resultsDiv.textContent += "\nFINAL RESULTS:";
      resultsDiv.textContent += "\nThe computer's score is " + computerScore;
      resultsDiv.textContent += "\nYour score is " + humanScore;

      if (computerScore > humanScore) {
            resultsDiv.textContent += "\nThe computer won the game!";
      }
      else if (humanScore > computerScore) {
            resultsDiv.textContent += "\nYou won the game!";
      }
      else {
            resultsDiv.textContent += "\nThe game is a tie!";
      }
}


function playGame() {
      
      buttonRock.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playRound("rock", computerSelection);
            if (computerScore == 5 || humanScore == 5) finalResults();
      })


      buttonPaper.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playRound("paper", computerSelection);
            if (computerScore == 5 || humanScore == 5) finalResults();
      })


      buttonScissors.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playRound("scissors", computerSelection)
            if (computerScore == 5 || humanScore == 5) finalResults();
      })

      
}

playGame();