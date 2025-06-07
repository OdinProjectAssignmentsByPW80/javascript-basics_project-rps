/**
 * Script to play rock paper scissors with the computer through the ui in
 * index.html
 */

"use strict";

/* #region  ACTIVE ELEMENTS */

const rBtn = document.querySelector("#r-btn");
const pBtn = document.querySelector("#p-btn");
const sBtn = document.querySelector("#s-btn");
const resetBtn = document.querySelector("#reset-btn");
const playerScoreDisplay = document.querySelector("#player-score");
const cpuScoreDisplay = document.querySelector("#cpu-score");

/* #endregion */

/* #region  MAIN */

// event listeners for buttons
rBtn.addEventListener("click", () => playRound(0));
pBtn.addEventListener("click", () => playRound(1));
sBtn.addEventListener("click", () => playRound(2));
resetBtn.addEventListener("click", () => resetScore());

/**
 * Generate a random choice for the computer.
 * @returns {int} Refers to an index in choices.
 */
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

/**
 * Plays a single round of paper rock scissors between the computer and player.
 * @returns {string>} describes the result of the round.
 */
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "Result: Draw";
  let playerWon = playerChoice > computerChoice;
  if (playerChoice == 0 && computerChoice == 2) playerWon = !playerWon;
  if (playerWon) incrementScore(playerScoreDisplay);
  else incrementScore(cpuScoreDisplay);
  result = playerWon ? "Result: Player Won" : "Result: Player Lost";
  displayResult([playerChoice, computerChoice, result]);
}

function displayResult(resultArr) {
  console.log(resultArr);
}

/**
 * Increases the score of an xScoreDisplay element by 1.
 * @param {object} el the element to be updated.
 */
function incrementScore(el) {
  el.innerHTML = +el.innerHTML + 1;
}

/**
 * Resets both xScoreDisplay elements to 0.
 */
function resetScore() {
  playerScoreDisplay.innerHTML = 0;
  cpuScoreDisplay.innerHTML = 0;
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

// function testButton() {
//   console.log("Button Pressed");
// }

// playerScoreDisplay.innerHTML = "I have changed this";
// cpuScoreDisplay.innerHTML = "I have changed this too";

/* #endregion */
