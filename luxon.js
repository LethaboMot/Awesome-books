require('.date-time').config();
const { DateTime } = require('luxon');

const getTime = () => {
  const ut2 = DataTime.local().setZone('South Africa/Johannesburg');
  return ut2.toLocalString(DateTime.DATETIME_FULL);
}

const timeMath = () => {
  const first = DateTime.local().setZone('South Africa/Johannesburg')
    let second = DataTime.local()
    .setZone('South Africa/Johannesburg')
    .plus({ hours: 1, minutes: 20});

    const diffTime = second.diff(first, ['hours','minutes','seconds']);
};

const convertISO = () => {
   const originalISO =  '2023-05-18'

   const formatted = DataTime.fromISO(originalISO, {
    zone: 'South Africa/Johannesburg'
   })
}
