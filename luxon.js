const { DateTime } = require('./main.js');
const currentDateTime = DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS);
const currentTimeElement = document.getElementById('current-time');
currentTimeElement.innerHTML = currentDateTime;

const dateTime = document.querySelector('.date-time');

window.onload = () => {
  dateTime.innerHTML = timeNow;
};
