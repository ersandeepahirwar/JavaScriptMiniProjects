// Creating an array for letters of color codes
const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Selecting the element from the document
let icon = document.getElementById("icon");
let colorCode = document.getElementById("color-code");
let button = document.getElementById("button");

// Creating the random number generator
function randomNumber() {
  return Math.floor(Math.random() * letters.length);
}

// Adding click event listner to the button
button.addEventListener("click", () => {
  let randomColor = "#";

  for (let letter = 0; letter < 6; letter++) {
    randomColor += letters[randomNumber()];
  }

  icon.style.color = randomColor;
  colorCode.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
});
