import {  } from './index.js';

const getTime = () => {
  const utc2 = dateTime.local().setZone('South Africa/Johannesburg');
  return utc2.toLocalString(dateTime.DATETIME_FULL);
};
getTime();
dateTime();
