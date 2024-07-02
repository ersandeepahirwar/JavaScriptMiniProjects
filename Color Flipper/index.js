// Creating the Array of Color names
const colors = [
  "Red",
  "DeepPink",
  "OrangeRed",
  "DarkOrange",
  "green",
  "DarkViolet",
  "Blue",
  "Magenta",
];

// Selecting the element from the document
let icon = document.getElementById("icon");
let colorCode = document.getElementById("color-code");
let button = document.getElementById("button");

// Creating the random number generator
function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// Adding click event listner to the button
button.addEventListener("click", () => {
  let randomColor = randomNumber();

  icon.style.color = colors[randomColor];
  colorCode.style.backgroundColor = colors[randomColor];
  colorCode.textContent = colors[randomColor];
});
