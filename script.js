//Rock, Paper, or Scissors GAME

// CREATE a function called getComputerChoice
//       STORE a number between 0 and 2 in a variable called randomNumber
//       IF randomNumber is 0 RETURN 'rock'
//       ELSE IF randomNumber is 1 RETURN 'paper'
//       ELSE RETURN 'scissors'
// END of getComputerChoice function

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

//--------------------------------------------------------------
//--------------------------------------------------------------

// CREATE a function called getUserChoice
//       ASK the user to enter either 'rock', 'paper', or 'scissors' and STORE their response in a variable called userInput
//       RETURN userInput only after it is lowercase
// END of getUserChoice function

function getUserChoice() {
      let userInput = prompt("Please enter either 'rock', 'paper', or 'scissors'");
      return userInput.toLowerCase();
}

//--------------------------------------------------------------
//--------------------------------------------------------------

// CREATE a function called determineWinner
//       IF userChoice is 'rock'
//             CASE computerChoice is 'paper'
//                   RETURN 'The computer won!'
//             CASE computerChoice is 'scissors'
//                   RETURN 'You won!'
//             CASE computerChoice is 'rock'
//                   RETURN 'The game is a tie!'
//       ELSE IF userChoice is 'paper'
//             CASE computerChoice is 'scissors'
//                   RETURN 'The computer won!'
//             CASE computerChoice is 'rock'
//                   RETURN 'You won!'
//             CASE computerChoice is 'paper'
//                   RETURN 'The game is a tie!'
//       ELSE IF userChoice is 'scissors'
//             CASE computerChoice is 'rock'
//                   RETURN 'The computer won!'
//             CASE computerChoice is 'paper'
//                   RETURN 'You won!'
//             CASE computerChoice is 'scissors'
//                   RETURN 'The game is a tie!'
//       ELSE
//             RETURN 'Please enter a valid choice'

function determineWinner(userChoice, computerChoice) {
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



//--------------------------------------------------------------
//--------------------------------------------------------------

//THE GAME
while (true) {
      let playerSelection = getUserChoice();
      let computerSelection = getComputerChoice();
      console.log("The computer chooses " + computerSelection);
      console.log(determineWinner(playerSelection, computerSelection));
      let playAgain = prompt("Would you like to stop? (say 'y' if yes)").toLowerCase();
      if (playAgain == 'y') {
            break;
      }
}