console.log("hello world!");


//console.log(arr[0]);

//console.log(arr.length);

let arr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection) {
     playerSelection = prompt("rock, paper, scissors?");
     computerSelection = getComputerChoice();

     if (playerSelection.toLowerCase() === 'rock') {
         if (computerSelection === 'rock'){
             return 'You Tie!';
         }
         else if (computerSelection === 'paper'){
             return 'You Lose! Paper beats Rock!';
         }
         else if (computerSelection === 'scissors'){
             return 'You Win! Rock beats Scissors!';
         }
     }
     else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock'){
            return 'You Win! Paper beats Rock!';
        }
        else if (computerSelection === 'paper'){
            return 'You Tie!';
        }
        else if (computerSelection === 'scissors'){
            return 'You Lose! Scissors beats Paper!';
        }

     }
     else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock'){
            return 'You Lose! Rock beats Scissors!';
        }
        else if (computerSelection === 'paper'){
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

    

