/**
 * Script to play rock paper scissors with the computer through the ui in
 * index.html
 */

"use strict";

/* #region  ACTIVE ELEMENTS */

// buttons
const rBtn = document.querySelector("#r-btn");
const pBtn = document.querySelector("#p-btn");
const sBtn = document.querySelector("#s-btn");
const resetBtn = document.querySelector("#reset-btn");
const resultDone = document.querySelector("#result-done");

// elements
const playerScoreDisplay = document.querySelector("#player-score");
const cpuScoreDisplay = document.querySelector("#cpu-score");
const resultsDisplay = document.querySelector("#results");
const playerResultImg = document.querySelector("#player-result-img");
const cpuResultImg = document.querySelector("#cpu-result-img");
const resultText = document.querySelector("#result-text");

/* #endregion */

/* #region  MAIN */

// event listeners for buttons
rBtn.addEventListener("click", () => playRound(0));
pBtn.addEventListener("click", () => playRound(1));
sBtn.addEventListener("click", () => playRound(2));
resetBtn.addEventListener("click", () => resetScore());
resultDone.addEventListener("click", () => hideResult());

/**
 * Generate a random choice for the computer.
 * @returns {int} number representing rock[0], paper[1], scissors[2].
 */
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

/**
 * Plays a single round of paper rock scissors between the computer and player.
 * @param {int} playerChoice number representing rock[0], paper[1], scissors[2].
 */
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result;
  if (playerChoice == computerChoice) {
    result = "Result: Draw";
  } else {
    let playerWon = playerChoice > computerChoice;
    if (
      (playerChoice == 0 && computerChoice == 2) ||
      (playerChoice == 2 && computerChoice == 0)
    ) {
      playerWon = !playerWon;
    }
    if (playerWon) incrementScore(playerScoreDisplay);
    else incrementScore(cpuScoreDisplay);
    result = playerWon ? "Result: Player Won" : "Result: Player Lost";
  }
  displayResult([playerChoice, computerChoice, result]);
}

/**
 * Display the result of the round to user.
 * @param {Arr<int, int, string>} resultArr contains playerChoice,
 * computerChoice and result from last player round.
 */
function displayResult(resultArr) {
  resultsDisplay.style.visibility = "visible";
  const imgs = ["./img/rock.svg", "./img/paper.svg", "./img/scissors.svg"];
  playerResultImg.src = imgs[resultArr[0]];
  cpuResultImg.src = imgs[resultArr[1]];
  resultText.innerHTML = resultArr[2];
}

/**
 * Hide the result dialogue from the user.
 */
function hideResult() {
  resultsDisplay.style.visibility = "hidden";
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
