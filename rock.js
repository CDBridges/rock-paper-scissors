console.log("hello world!");


//console.log(arr[0]);

//console.log(arr.length);

let arr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}