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

/* #endregion */

/* #region  TESTING */

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

/* #endregion */
