// Defining a variable for counter value
let count = 0;

// Select the elements
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// Add click event listner to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function (element) {
    const classesOfButton = element.currentTarget.classList;

    if (classesOfButton.contains("decrease")) {
      count--;
    } else if (classesOfButton.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
