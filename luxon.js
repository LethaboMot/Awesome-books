const { dateTime } = require('.');
const { DateTime } = require('./index.js;');
const getTime = () => {
  const utc2 = DateTime .local().setZone('South Africa/Johannesburg');
  return utc2.toLocalString(dateTime.DATETIME_FULL);
}
getTime();
dateTime();
