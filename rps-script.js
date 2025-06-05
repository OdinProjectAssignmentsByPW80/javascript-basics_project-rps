"use strict";

/* #region  MAIN */

const choices = ["ROCK", "PAPER", "SCISSORS"];

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
 * @returns {Array<int, int, string>} Contains the computers choice as an int,
 * the players choice as an int and a string describing the result of the round.
 */
function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  if (playerChoice == computerChoice) {
    return [computerChoice, playerChoice, "Draw"];
  }
  let playerWon = playerChoice > computerChoice;
  if (playerChoice == 0 && computerChoice == 2) playerWon = !playerWon;
  return [
    computerChoice,
    playerChoice,
    playerWon ? "Player Won" : "Player Lost",
  ];
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
