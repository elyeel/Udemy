let numSquares = 6;

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

let colours = generateRandomColour(numSquares);

const pickColour = function () {
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
};

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
let colourDisplay = document.getElementById("colourDisplay");
colourDisplay.textContent = pickedColour;
let messageDisplay = document.getElementById("message");
let resetButton = document.getElementById("reset");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", () => {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colours = generateRandomColour(numSquares);
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;

  for (let i = 0; i < squares.length; ++i) {
    if (colours[i]) {
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", () => {
  numSquares = 6;
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  colours = generateRandomColour(numSquares);
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;

  for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colours[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", () => {
  // generate all new colours
  colours = generateRandomColour(numSquares);
  // pick a new random colour from array
  pickedColour = pickColour();
  // change colorDisplay to match picked colour
  colourDisplay.textContent = pickedColour;
  // change colours of squares
  for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colours[i];
  }
  h1.style.backgroundColor = "#232323";
});

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

const changeColour = (colour) => {
  for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colour;
  }
};
