let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

setInterval(updateTime, 1000);

function updateTime() {
  increaseSecondCount();
  document.getElementById("clock").innerHTML =
    formatNumber(hours) +
    ":" +
    formatNumber(minutes) +
    ":" +
    formatNumber(seconds) +
    getAmPM();
}

function getHourCount() {
  if (hours == 23) {
    hours = 0;
  } else {
    hours += 1;
  }
}

function increaseMinuteCount() {
  if (minutes == 59) {
    minutes = 0;
    getHourCount();
  } else {
    minutes += 1;
  }
}

function increaseSecondCount() {
  if (seconds == 59) {
    seconds = 0;
    increaseMinuteCount();
  } else {
    seconds += 1;
  }
}

function getAmPM() {
  if (hours < 12) {
    return " AM";
  } else {
    return " PM";
  }
}

function formatNumber(number) {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

