let arr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {
     playerSelection = prompt("rock, paper, scissors?");
     computerSelection = getComputerChoice();


     if (playerSelection.toLowerCase() === 'rock') {
         if (computerSelection === 'rock'){
             return 'You Tie!';
         }
         else if (computerSelection === 'paper'){
             computerWin++;
             return 'You Lose! Paper beats Rock!';
         }
         else if (computerSelection === 'scissors'){
             playerWin++;
             return 'You Win! Rock beats Scissors!';
         }
     }
     else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock'){
            playerWin++;
            return 'You Win! Paper beats Rock!';
        }
        else if (computerSelection === 'paper'){
            return 'You Tie!';
        }
        else if (computerSelection === 'scissors'){
            computerWin++;
            return 'You Lose! Scissors beats Paper!';
        }

     }
     else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock'){
            computerWin++;
            return 'You Lose! Rock beats Scissors!';
        }
        else if (computerSelection === 'paper'){
            playerWin++;
            return 'You Win! Scissors beats Paper';
        }
        else if (computerSelection === 'scissors'){
            return 'You Tie!';
        }
     }
     else {
         return 'Please choose rock, paper, or scissors';
     }
}

function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound());     
    }
    if (playerWin > computerWin) {
        console.log(`You Won! ${playerWin} - ${computerWin}`);
        playerWin = 0;
        coumputerWin = 0;
    }
    else if (playerWin < computerWin) {
        console.log(`You Lost! ${playerWin} - ${computerWin}`);
        playerWin = 0;
        coumputerWin = 0;
    }
    else if (playerWin === computerWin) {
        console.log(`You Tied! ${playerWin} - ${computerWin}`);
        playerWin = 0;
        coumputerWin = 0;
    }
}
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


        // THE METHOD BELOW IS ONE OF MY SOLUTIONS
   //  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
   //      return 'You Tie!';
   //  }
   //  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
   //     return 'You Lose! Paper beats Rock!';
   // }
   //  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
   //     return 'You Win! Rock beats Scissors!';
   // }
           
        //THE METHOD BELOW USES switch()

   // if (playerSelection.toLowerCase() === 'rock') {
   //     switch (computerSelection) {
   //         case computerSelection = 'rock':
   //             console.log(" You Tie!");
   //             break;
   //         case computerSelection = 'paper':
   //            console.log("You Lose! Paper beats Rock");
   //            break;
   //         case computerSelection = 'scissors':
   //             console.log("You Win! Rock beats scissors");
   //             break;
    //    }

    

