// Selecting the elements from the document
const monkeyFace = document.querySelector(".monkey-face");
const closedEars = document.querySelector(".closed-ears");
const closedEyes = document.querySelector(".closed-eyes");
const closedMouth = document.querySelector(".closed-mouth");

// Adding click event listner to the monkey face
monkeyFace.addEventListener("click", () => {
  if (closedEars.classList.contains("closed-ears")) {
    closedEars.classList.add("active");
    monkeyFace.classList.remove("active");
  }
});

// Adding click event listner to the monkey face with closes ears
closedEars.addEventListener("click", () => {
  if (closedEyes.classList.contains("closed-eyes")) {
    closedEyes.classList.add("active");
    closedEars.classList.remove("active");
  }
});

// Adding click event listner to the monkey face with closed eyes
closedEyes.addEventListener("click", () => {
  if (closedMouth.classList.contains("closed-mouth")) {
    closedMouth.classList.add("active");
    closedEyes.classList.remove("active");
  }
});

// Adding click event listner to the monkey face with closes mouth
closedMouth.addEventListener("click", () => {
  if (monkeyFace.classList.contains("monkey-face")) {
    monkeyFace.classList.add("active");
    closedMouth.classList.remove("active");
  }
});
