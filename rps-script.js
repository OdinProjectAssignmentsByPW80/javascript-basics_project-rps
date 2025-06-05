"use strict";

/* #region  MAIN */

const choices = ["ROCK", "PAPER", "SCISSORS"];

/**
 * Generate a random choice for the computer.
 * @returns {string} One of the three choices: "ROCK", "PAPER" or "SCISSORS".
 */
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

/**
 * Prompts player to make a choice.
 * @returns {string} One of the three choices: "ROCK", "PAPER" or "SCISSORS".
 */
function getPlayerChoice() {
  const promptText = "Please enter a number..\n1: ROCK\n2: PAPER\n3: SCISSORS";
  // return prompt(promptText, 0);
  return choices[prompt(promptText) - 1];
}

/* #endregion */

/* #region  TESTING */

/* getComputerChoice */
// for (let i = 0; i < 10; i++) {
//   console.log(getComputerChoice());
// }

/* getPlayer Choice */
// console.log("player", getPlayerChoice());

/* #endregion */
