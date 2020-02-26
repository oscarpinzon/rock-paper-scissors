"use strict"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getUserInput() {
    let validInput = false;
    let playerSelection;
    while(!validInput){
        playerSelection = prompt("Choose! Rock, Paper or Scissors?").toLowerCase();
        validInput = (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'); 
    }
    return playerSelection;
}

function computerPlay () {
    const options = ["rock","paper","scissors"];
    const randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption;
}

function playRound(playerSelection,computerSelection){
    if(playerSelection ===  computerSelection){
        return "tie";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return "player wins";
    }
    else {
        return "player lose";
    }
}

function game() {
    const maxRounds = 5;
    let round = 1;
    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;
    let playerSelection;
    let computerSelection;
    let roundResult;
    for (round; round <= maxRounds; round++) {
        playerSelection = getUserInput();
        computerSelection = computerPlay();
        roundResult = playRound(playerSelection,computerSelection);
        if(roundResult === "tie") {
            ties++;
            console.log(`Round ${round} is a Tie! You Both Choose ${capitalizeFirstLetter(playerSelection)}`);
        }
        else if (roundResult === "player wins") {
            playerWins++;
            console.log(`Round ${round} Goes to the Player! ${capitalizeFirstLetter(playerSelection)} Beats ${capitalizeFirstLetter(computerSelection)}`);
        }
        else {
            computerWins++;
            console.log(`Round ${round} Goes to the Computer! ${capitalizeFirstLetter(computerSelection)} Beats ${capitalizeFirstLetter(playerSelection)}`);
        }
    }
    if (ties  === 5) {
        console.log("Impressive! All Rounds Where Ties");
    }
    else if (playerWins > computerWins) {
        console.log(`Congrats! You Beat the Computer ${playerWins} to ${computerWins}`);
    }
    else {
        console.log(`Defeated, You Lost ${computerWins} to ${playerWins}`);
    }
}
game();
