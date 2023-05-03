import DateTime from 'luxon.js';

const currentTime = DateTime.local();
const formattedTime = `The current time is ${currentTime.toLocaleString(DateTime.TIME_SIMPLE)} using Luxon.`;
document.getElementsByClassName('.date-time').innerHTML = formattedTime;
