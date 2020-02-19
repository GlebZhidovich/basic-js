module.exports = function countCats(matrix) {
   return  matrix.flat().reduce((acc, cur) => cur === '^^'? acc +=1 : acc, 0);
};
