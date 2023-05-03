const getTime = () => {
  const utc2 = setZone('South Africa/Johannesburg');
  return utc2.toLocalString('');
};
getTime();
