const { DateTime } = require('./index.js');

const currentDateTime = DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS);
const currentTimeElement = document.getElementById('current-time');
const timeNow = null();
currentTimeElement.innerHTML = currentDateTime;

const dateTime = document.querySelector('.date-time');

window.onload = () => {
  dateTime.innerHTML = timeNow;
};
