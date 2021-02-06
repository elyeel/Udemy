let whiteColour = true;
let button = document.querySelector("button");
//solution 1
// button.addEventListener("click", () => {
//   if (whiteColour) {
//     document.bgColor = "purple";
//   } else {
//     document.bgColor = "white";
//   }
//   whiteColour = !whiteColour;
// });

//solution 2 using css toggle
button.addEventListener("click", () => {
  document.body.classList.toggle("purple");
});