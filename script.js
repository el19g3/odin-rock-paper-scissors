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
console.log("The computer chooses " + getComputerChoice());
