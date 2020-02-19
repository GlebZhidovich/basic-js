module.exports = function getSeason(date/*  */) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  date.getUTCDate();
  if (date instanceof Date) {
    const monthNum = date.getMonth();
    if (monthNum === 11 || monthNum === 0 || monthNum === 1) {
      return 'winter';
    }
    if (monthNum === 2 || monthNum ===  3 || monthNum ===  4) {
      return 'spring';
    }
    if (monthNum === 5 || monthNum ===  6 || monthNum ===  7) {
      return 'summer';
    }
    if (monthNum === 8 || monthNum ===  9 || monthNum ===  10) {
      return 'autumn';
    }
  }
  throw new Error()
};
