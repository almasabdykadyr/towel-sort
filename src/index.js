module.exports = function towelSort (matrix) {
  let r = [];

  if(matrix === undefined) return r;

  for (let i = 0; i < matrix.length; ++i){
    if(i % 2 == 0){
      for(let j = 0; j < matrix[i].length; ++j){
        r.push(matrix[i][j]);
      }
    } else {
      for(let j = matrix[i].length - 1; j > -1; --j){
        r.push(matrix[i][j]);
      }
    }
  }

  return r;
}
