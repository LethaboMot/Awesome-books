const { DateTime } = require('luxon.js');

const local = DateTime.local(); {
  local.zoneName; 
  local.toString();
}
 
const iso = DateTime.fromISO('2017-05-15T09:10:23');{
  iso.zoneName; 
  iso.toString(); 
}
DateTime();
