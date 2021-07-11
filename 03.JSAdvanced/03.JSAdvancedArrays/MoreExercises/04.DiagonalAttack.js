function main(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
 
    let sumFirstDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (var j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length-1-j];
    }
 
    if (sumFirstDiagonal == sumSecondDiagonal){
        for (var q = 0; q < matrix.length; q++) {
            for (var z = 0; z < matrix.length; z++) {
                if( q != z && q != matrix.length-1-z)  {
                    matrix[q][z] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    }
    else
    {
        printMatrix(matrix);
    }
 
    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}

//--------------
function main(array) {
    let matrix = [];
    for (let row = 0; row < array.length; row++) {
      matrix[row] = array[row].split(' ').map(x => +x);
    }
  
    let diagonalsIndexes = [];
  
    let diagonalSum1 = 0;
    for (let i = 0; i < matrix.length; i++) {
      diagonalsIndexes.push([i, i]);
      diagonalSum1 += matrix[i][i];
    }
  
    let diagonalSum2 = 0;
    for (let row = 0, i = matrix.length - 1; row < matrix.length; row++, i--) {
      diagonalsIndexes.push([row, i]);
      diagonalSum2 += matrix[row][i];
    }
  
    if (diagonalSum1 === diagonalSum2) {
      // CHECK FOR DUPLICATE POSITION [x, y]
      let middleIndex = -1;
      if (matrix.length % 2 !== 0) {
        middleIndex = matrix.length / 2;
      }
  
      // REMOVE DUPLICATE POSITION [x, y]
      if (middleIndex !== -1) {
        diagonalsIndexes.splice(middleIndex, 1);
      }
  
      // SORT POSITIONS
      diagonalsIndexes = diagonalsIndexes.sort((x, y) => (x > y) - (x < y));
  
      // SET EVERY CELL THAT'S ON THE DIAGONALS TO DIAGONAL SUM
      let position = 0;
      for (let row = 0; row < matrix.length; row++) {
        for (let i = 0; i < matrix[row].length; i++) {
          let positions = diagonalsIndexes[position];
          if (row === positions[0] && i === positions[1]) {
            position++;
            continue;
          } else {
            matrix[row][i] = diagonalSum1;
          }
        }
      }
    }
  
    // PRINT FINAL MATRIX
    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
  
  // Don't copy the calling of the function in judge, you won't get any points, just the code above
  main(['5 3 12 3 1', 
         '11 4 23 2 5',
         '101 12 3 21 10',
         '1 4 5 2 2',
         '5 22 33 11 1']);
        
  main(['1 1 1',
         '1 1 1',
         '1 1 0']);