function main(matrix) {

    for(let i = 0;i < matrix.length-1;i++){
        let rowOne = matrix[0].reduce((p,c,i,a)=> p + c,0);
        let rowTwo = matrix[1].reduce((p,c,i,a)=> p + c,0);
        let columnOne = 0;
        let columnTwo = 0;
        
        for(let a = 0;a < matrix.length;a++){
            columnOne += matrix[i][a];
            columnTwo += matrix[i + 1][a];
        }

        if(rowTwo != rowOne || columnTwo != columnOne){
            return false;
        }
    }
    return true;
}

console.log(main([[4, 5, 6],[6, 5, 4],[5, 5, 5]]));

console.log(main([[11, 32, 45],[21, 0, 1],[21, 1, 1]]));

console.log([[1, 0, 0], [0, 0, 1],  [0, 1, 0]]);

//Write a function that checks if a given matrix of numbers is magical.  A matric is magical if the sums of the cells of every row and every column are equal.
//The input comes as an array of arrays, containing numbers (number 2D matrix).  The input numbers will always be positive.
//The output is a Boolean result indicating whether the matric is magical or not.

//------------------ DECLARATIVE APPROACH ------------------ I ---- DISTINCT using a SET
function main(input = []) {
    let matrice = input.slice();
  
    let areRowsEqual = new Set(matrice.map(row => row.reduce((a, b) => a + b))).size === 1;
    let areColsEqual = new Set(matrice.reduce((a, b) => a.map((element, index) => element + b[index]))).size === 1;
  
    //return areRowsEqual && areColsEqual;
    console.log(areRowsEqual && areColsEqual);
  }
  
  // Don't copy the calling of the function in judge, you won't get any points, just the code above
  console.log(main([[4, 5, 6],
                     [6, 5, 4],
                     [5, 5, 5]]));
  
  console.log(main([[11, 32, 45],
                     [21, 0, 1],
                     [21, 1, 1]]));
                  
  console.log(main([[1, 0, 0],
                     [0, 0, 1],
                     [0, 1, 0]]));
  
  //------------------ DECLARATIVE APPROACH ------------------ II --- Check each element
  /*
    function solve(input = []) {
      let matrice = input.slice();
      let areRowsEqual = matrice.map(row => row.reduce((a, b) => a + b))
                                .every((x, _, arr) => x === arr[0]);
      let areColsEqual = matrice.reduce((a, b) => a.map((element, index) => element + b[index]))
                                .every((x, _, arr) => x === arr[0]);
      return areRowsEqual && areColsEqual;
    }
    // Don't copy the calling of the function in judge, you won't get any points, just the code above
    console.log(solve([[4, 5, 6],
                       [6, 5, 4],
                       [5, 5, 5]]));
    console.log(solve([[11, 32, 45],
                       [21, 0, 1],
                       [21, 1, 1]]));
    console.log(solve([[1, 0, 0],
                       [0, 0, 1],
                       [0, 1, 0]]));
  */