// Array created for names of the days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Array created for names of the months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function created for the digital clock
let Clock = () => {
  let timezone = new Date();

  let time = timezone.toLocaleTimeString();
  let day = timezone.getDay();
  let date = timezone.getDate();
  let month = timezone.getMonth();
  let hours = timezone.getHours();
  let minutes = timezone.getMinutes();
  let seconds = timezone.getSeconds();
  var ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    var ampm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerHTML = time;
  document.getElementById("day").innerHTML = days[day];
  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = months[month];
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("am-pm").innerHTML = ampm;
};

// SetInterval for the function
setInterval(Clock, 1000);
