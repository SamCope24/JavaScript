let seconds;
let minutes;
let hours;
let counting;

resetCount();
updateWatch();

function resetCount() {
  hours = 0;
  minutes = 0;
  seconds = 0;
}

function updateWatch() {
  document.getElementById("counter").innerHTML = getFormattedCount();
}

function getFormattedCount() {
  return (
    hours.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ":" +
    minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    ":" +
    seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  );
}

function startWatch() {
  disableStartButton(true);
  counting = setInterval(increaseStopwatchCount, 100);
}

function stopWatch() {
  clearInterval(counting);
  disableStartButton(false);
}

function resetWatch() {
  clearInterval(counting);
  resetCount();
  updateWatch();
  disableStartButton(false);
}

function disableStartButton(value)
{
  document.getElementById("start").disabled = value;
}

function increaseStopwatchCount() {
  if (seconds < 59) {
    seconds += 1;
  } else if (minutes < 59) {
    seconds = 0;
    minutes += 1;
  } else {
    seconds = 0;
    minutes = 0;
    hours += 1;
  }
  updateWatch();
}
