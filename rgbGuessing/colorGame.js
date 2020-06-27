let colours = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

const pickColour = function() {
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

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

