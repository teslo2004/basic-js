module.exports = function countCats(matrix) {
  var result = 0;
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] == "^^"){
        result += 1;
      }
    }
  }
  return result;
};
