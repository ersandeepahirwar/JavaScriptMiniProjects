// Creating the Array of Color names
const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 20, 147)",
  "rgb(255, 69, 0)",
  "rgb(255, 140, 0)",
  "rgb(255, 255, 0)",
  "rgb(148, 0, 211)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 139)",
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
