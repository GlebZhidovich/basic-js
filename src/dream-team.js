module.exports = function createDreamTeam(members/*  */) {
  if (Array.isArray(members)) {
    return members.filter(elem => {
      if (typeof elem === 'string') {
        return elem;
      }
    }).map(elem => elem.trim().toUpperCase()).sort().reduce((acc, cur) =>  acc + cur[0],'');
  }
  return false;
};