"use strict";

function game() {
  const maxWins = 5;
  let playerWins = 0;
  let computerWins = 0;

  function initialGameState() {
    playerWins = 0;
    computerWins = 0;
    document.querySelector("#computerChoiceIcon").className = "fa fa-question-circle-o fa-5x";
    document.querySelector("#roundResult").textContent = "Good Luck!";
    document.querySelector("#playerWins").textContent = `Player wins: 0/${maxWins}`;
    document.querySelector("#computerWins").textContent = `Computer wins: 0/${maxWins}`;
  }

  function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption;
  }

  function checkWinner(){
    if(playerWins === maxWins){
      alert("Congratulations you Win!");
      initialGameState();
    }
    else if (computerWins === maxWins) {
      alert("I win human!");
      initialGameState();
    }
  }

  function getComputerClasses(choice){
    if (choice === 'rock') {
      return 'fa fa-hand-rock-o fa-5x';
    }
    else if (choice === 'paper') {
      return 'fa fa-hand-paper-o fa-5x';
    }
    else {
      return 'fa fa-hand-scissors-o fa-5x';
    }
  }

  function updateScores(){
    document.querySelector("#playerWins").textContent = `Player wins: ${playerWins}/5`;
    document.querySelector("#computerWins").textContent = `Computer wins: ${computerWins}/5`;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      document.querySelector("#computerChoiceIcon").className = getComputerClasses(computerSelection);
      document.querySelector("#roundResult").textContent = "We have a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      document.querySelector("#computerChoiceIcon").className = getComputerClasses(computerSelection);
      document.querySelector("#roundResult").textContent = "The Player Wins this Round!";
      playerWins++;
      updateScores();
      checkWinner();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      document.querySelector("#computerChoiceIcon").className = getComputerClasses(computerSelection);
      document.querySelector("#roundResult").textContent = "The Player Wins this Round!";
      playerWins++;
      updateScores();
      checkWinner();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      document.querySelector("#computerChoiceIcon").className = getComputerClasses(computerSelection);
      document.querySelector("#roundResult").textContent = "The Player Wins this Round!";
      playerWins++;
      updateScores();
      checkWinner();
    } else {
      document.querySelector("#computerChoiceIcon").className = getComputerClasses(computerSelection);
      document.querySelector("#roundResult").textContent = "I Win this Round!";
      computerWins++;
      updateScores();
      checkWinner();
    }
  }
  
  function addEventListeners() {
    let playerRockBtn = document.querySelector("#playerRock");
    playerRockBtn.addEventListener("click", () => {
      playRound('rock',computerPlay());
    });
    let playerPaperBtn = document.querySelector("#playerPaper");
    playerPaperBtn.addEventListener("click", () => {
      playRound('paper',computerPlay());
    });
    let playerScissorsBtn = document.querySelector("#playerScissors");
    playerScissorsBtn.addEventListener("click", () => {
      playRound('scissors',computerPlay());
    });
  }

  initialGameState();
  addEventListeners();
}
game();
