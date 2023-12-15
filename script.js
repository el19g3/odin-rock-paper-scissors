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
      userInput = userInput.toLowerCase();
      return userInput;
}

//--------------------------------------------------------------
//--------------------------------------------------------------

// CREATE a function called playRound
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



//--------------------------------------------------------------
//--------------------------------------------------------------

// CREATE a function called game
//       FOR five times call the function playRound
//             IF the result of playRound is 'The computer won!'
//                   ADD one to the computer score
//             ELSE IF the result of playRound is 'You won!'
//                   ADD one to the user score
//       END of for loop
//       IF the computer score is greater than the user score
//             RETURN 'The computer won the game!'
//       ELSE IF the user score is greater than the computer score
//             RETURN 'You won the game!'
//       ELSE
//             RETURN 'The game is a tie!'

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


//THE GAME
console.log(game());