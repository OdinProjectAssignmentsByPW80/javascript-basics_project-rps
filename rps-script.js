/**
 * Script to play a five round game of paper rock scissors between the computer
 * and a human player in the console of a browser.
 * Uses `prompt()` without error checking to get user input.
 */

"use strict";

/* #region  MAIN */

let playerScore = 0;
let computerScore = 0;

/**
 * Generate a random choice for the computer.
 * @returns {int} Refers to an index in choices.
 */
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

/**
 * Prompts player to make a choice.
 * @returns {int} Refers to index in choices.
 */
function getPlayerChoice() {
  const promptText = "Please enter a number..\n1: ROCK\n2: PAPER\n3: SCISSORS";
  return prompt(promptText) - 1;
}

/**
 * Plays a single round of paper rock scissors between the computer and player.
 * @returns {string>} describes the result of the round.
 */
function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  printChoices(playerChoice, computerChoice);
  if (playerChoice == computerChoice) {
    return "Result: Draw";
  }
  let playerWon = playerChoice > computerChoice;
  if (playerChoice == 0 && computerChoice == 2) playerWon = !playerWon;
  if (playerWon) playerScore++;
  else computerScore++;
  return playerWon ? "Result: Player Won" : "Result: Player Lost";
}

/**
 * Plays a five round game of paper rock scissors between the computer and
 * player.
 */
function playGame() {
  welcomePlayer();
  for (let rounds = 1; rounds < 6; rounds++) {
    console.log("Round:", rounds);
    console.log(playRound());
    printScore();
  }
  summariseGame();
}

// playGame();

/* #endregion */

const rBtn = document.querySelector("#r-btn");
const pBtn = document.querySelector("#p-btn");
const sBtn = document.querySelector("#s-btn");
const resetBtn = document.querySelector("#reset-btn");

function testButton() {
  console.log("Button Pressed");
}

rBtn.addEventListener("click", testButton);
pBtn.addEventListener("click", testButton);
sBtn.addEventListener("click", testButton);
resetBtn.addEventListener("click", testButton);

/* #region  MESSAGE HANDLING */

/**
 * Prints a welcome message to the console.
 */
function welcomePlayer() {
  console.log(
    "== Welcome to Paper, Rock Scissors ==\n" +
      "\n" +
      "The game consists of five rounds, will prompt you for input and keep " +
      "track of your score as you progress.\n" +
      "Let's begin...\n"
  );
}

/**
 * Prints the player and computer choice to the console.
 * @param {int} player index of choice is choices[].
 * @param {int} computer index of choice is choices[].
 */
function printChoices(player, computer) {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  console.log(
    "Player Chose: " +
      choices[player] +
      " VS " +
      "Computer Chose: " +
      choices[computer]
  );
}

/**
 * Prints current score to the console.
 */
function printScore() {
  console.log(
    "|   - Player -   |  - Computer -  |\n" +
      "|----------------|----------------|\n" +
      "|       0" +
      playerScore +
      "       |        0" +
      computerScore +
      "      |\n"
  );
}

/**
 * Prints a summary of the game to the console.
 */
function summariseGame() {
  console.log(
    playerScore > computerScore
      ? "Congratulations You Won! ☺️\n"
      : "Sorry, Better luck next time. 😞\n"
  );
  console.log("Final Score:");
  printScore();
}

/* #endregion */

/* #region  TESTING */

/* getComputerChoice */
// for (let i = 0; i < 10; i++) {
//   console.log(getComputerChoice());
// }

/* getPlayerChoice */
// console.log("player", getPlayerChoice());

/* playRound */
// console.log(playRound());

/* #endregion */
