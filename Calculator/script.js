const display = document.querySelector("#display");

const appendKeyToDisplay = (key) => {
  display.value += key;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
