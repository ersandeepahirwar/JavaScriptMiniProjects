let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

setInterval(() => {
  let timezone = new Date();

  let hours = timezone.getHours();
  let minutes = timezone.getMinutes();
  let seconds = timezone.getSeconds();

  let hours_rotation = 30 * hours + minutes / 2 + seconds / 120;
  let minutes_rotation = 6 * minutes + seconds / 10;
  let seconds_rotation = 6 * seconds;

  hourHand.style.transform = `rotateZ(${hours_rotation}deg)`;
  minuteHand.style.transform = `rotateZ(${minutes_rotation}deg)`;
  secondHand.style.transform = `rotateZ(${seconds_rotation}deg)`;
}, 1000);
