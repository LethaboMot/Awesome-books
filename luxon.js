const local = DateTime.local();
const rezoned = local.setZone("South Africa/Pretoria");

local.toString();
rezoned.toString();

local.valueOf() === rezoned.valueOf(); 
