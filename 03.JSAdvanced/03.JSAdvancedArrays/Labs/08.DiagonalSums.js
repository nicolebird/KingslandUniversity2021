function main(matrix) {
    let result = '';
    let mdSum = 0;

    // Main Diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                mdSum += matrix[i][j];
            }
        }
    }

    result += mdSum + ' ';
    let sdSum = 0;

    // Secondary Diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === matrix[i].length - 1 - i) {
                sdSum += matrix[i][j];
            }
        }
    }

    result += sdSum;
    console.log(result);
}

main([[20, 40], [10, 60]]); //80 50