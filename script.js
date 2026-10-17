// DOM elements
const colorBox = document.getElementById("colorBox");
const generateBtn= document.getElementById("generateBtn");

// variables
let red = 0;
let green = 0;
let blue = 0;

// button logic
generateBtn.addEventListener('click', () => {
  changeColor();
})

// changeColor function
function changeColor() {
  red = Math.floor(Math.random()*256)
  green = Math.floor(Math.random()*256)
  blue= Math.floor(Math.random()*256)

  colorBox.style.backgroundColor = `rgb(${red},${green},${blue})`
}