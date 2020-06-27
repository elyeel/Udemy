const random = (r) => {
  return Math.floor(Math.random() * (r + 1));
}

const generateRandomColour = function(n) {
  // make an array
  const clrArr = [];
  // add n random colours to array
  for (let i = 0; i < n; ++i) {
    let tempColour = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    clrArr.push(tempColour);
  }
  // return that array
  return clrArr;
}

let colours = generateRandomColour(6);

const pickColour = function() {
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
let colourDisplay = document.getElementById("colourDisplay");
colourDisplay.textContent = pickedColour;
let messageDisplay = document.getElementById("message"); 
for (let i=0; i<squares.length; ++i) {
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
      h1.style.backgroundColor = pickedColour;
    } else {
      squares[i].style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

const changeColour = (colour) => {
  for (let i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = colour;
  }
};

