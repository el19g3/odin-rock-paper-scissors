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

function getUserChoice() {
      let userInput = prompt("Please enter either 'rock', 'paper', or 'scissors'");
      userInput = userInput.toLowerCase();
      return userInput;
}

function playRound(userChoice, computerChoice) {
      if (userChoice == 'rock') {
            switch (computerChoice) {
                  case 'paper':
                        return 'The computer won! Paper beats rock.';
                        break;
                        case 'scissors':
                        return 'You won! Rock beats scissors.';
                        break;
                        case 'rock':
                        return 'The game is a tie!';
                        break;
                  }
      }
      else if (userChoice == 'paper') {
            switch (computerChoice) {
                  case 'scissors':
                        return 'The computer won! Scissors beats paper.';
                        break;
                  case 'rock':
                        return 'You won! Paper beats rock.';
                        break;
                  case 'paper':
                        return 'The game is a tie!';
                        break;
            }
      }
      else if (userChoice == 'scissors') {
            switch (computerChoice) {
                  case 'rock':
                        return 'The computer won! Rock beats scissors.';
                        break;
                  case 'paper':
                        return 'You won! Scissors beats paper.';
                        break;
                  case 'scissors':
                        return 'The game is a tie!';
                        break;
            }
      }
      else {
            return 'Please enter a valid choice';
      }
}

function game() {
      let computerScore = 0;
      let userScore = 0;
      for (let i = 0; i < 5; i++) {
            let computerSelection = getComputerChoice();
            let playerSelection = getUserChoice();
            console.log("You choose " + playerSelection);
            console.log("The computer chooses " + computerSelection);
            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            console.log("--------------------");
            if (result[4] == 'c') {
                  computerScore++;
            }
            else if (result[4] == 'w') {
                  userScore++;
            }
            else {
                  console.log("Replay this round!");
                  console.log("--------------------");
                  i--;
            }
      }
      console.log("FINAL RESULTS:")
      console.log("The computer's score is " + computerScore);
      console.log("Your score is " + userScore);
      if (computerScore > userScore) {
            return 'The computer won the game!';
      }
      else if (userScore > computerScore) {
            return 'You won the game!';
      }
      else {
            return 'The game is a tie!';
      }
}

console.log(game());