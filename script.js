const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const min = document.querySelector("#mins");
const second = document.querySelector("#seconds");

const newYears = `1 Jan 2025 `;

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  day.innerHTML = formatTime(days);
  hour.innerHTML = formatTime(hours);
  min.innerHTML = formatTime(minutes);
  second.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);
