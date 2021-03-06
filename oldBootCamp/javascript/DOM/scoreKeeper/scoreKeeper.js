let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resetButton = document.getElementById("reset");
let h1 = document.querySelector("h1");
let p1Score = 0;
let p2Score = 0;
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let gameOver = false;
let winningScore = 5;
let numInput = document.querySelector("input");
let p = document.querySelector("p");
let winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click", ()=> {
  if (!gameOver) {
    ++p1Score;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    ++p2Score;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
})

const reset = function () {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

resetButton.addEventListener("click", () => {
  reset();
})

numInput.addEventListener("change", () => {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
})