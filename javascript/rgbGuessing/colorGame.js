let numSquares = 6;
let colours = [];
let pickedColour;
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colourDisplay = document.getElementById("colourDisplay");
let messageDisplay = document.getElementById("message");
let resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");

const setupSquares = () => {
  for (let i = 0; i < squares.length; ++i) {
    // add initial colour
    squares[i].style.backgroundColor = colours[i];
  
    // add click listeners to squares
    squares[i].addEventListener("click", () => {
      // grab colour of clicked square
      let clickedColour = squares[i].style.backgroundColor;
      // compare colour to clickedColour
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct";
        changeColour(pickedColour);
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = pickedColour;
      } else {
        squares[i].style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

const setUpModeButtons = () => {
  for (let i = 0; i < modeButtons.length; ++i) {
    modeButtons[i].addEventListener("click", () => {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[i].classList.add("selected");
      modeButtons[i].textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      
      reset();
    })
  }
}

const reset = () => {
  // generate all new colours
  colours = generateRandomColour(numSquares);
  // pick a new random colour from array
  pickedColour = pickColour();
  // change colorDisplay to match picked colour
  colourDisplay.textContent = pickedColour;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colours"
  // change colours of squares
  for (let i = 0; i < squares.length; ++i) {
    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

const random = (r) => {
  return Math.floor(Math.random() * (r + 1));
};

const generateRandomColour = function (n) {
  // make an array
  const clrArr = [];
  // add n random colours to array
  for (let i = 0; i < n; ++i) {
    let tempColour = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    clrArr.push(tempColour);
  }
  // return that array
  return clrArr;
};

const changeColour = (colour) => {
  for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colour;
  }
};

const pickColour = function () {
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
};

const init = () => {
  setUpModeButtons();
  setupSquares();
  reset();
}

init();









resetButton.addEventListener("click", () => {
  reset();
});




