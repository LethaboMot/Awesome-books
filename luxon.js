let output = document.querySelector('.date-time');
 output.textContent = JSON.stringify(luxon.DateTime.DATETIME_FULL);

 let DateTime = luxon.DateTime;
 let today = DateTime.local();
 let f = {month: 'long', day: '2-digit'};
 let m = today.get('month');
 let newDt = today.set({month: 12});
