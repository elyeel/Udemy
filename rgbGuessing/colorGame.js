let colours = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

let squares = document.querySelectorAll(".square");
let pickedColour = colours[3];
let colourDisplay = document.getElementById("colourDisplay");
colourDisplay.textContent = pickedColour;

for (let i=0; i<squares.length; ++i) {
  // add initial colour
  squares[i].style.backgroundColor = colours[i];

  // add click listeners to squares
  squares[i].addEventListener("click", () => {
    // grab colour of clicked square
    let clickedColour = squares[i].style.backgroundColor;
    // compare colour to clickedColour
    if (clickedColour === pickedColour) {
      alert("Correct");
    } else {
      alert("WRONG!");
    }
  })
}