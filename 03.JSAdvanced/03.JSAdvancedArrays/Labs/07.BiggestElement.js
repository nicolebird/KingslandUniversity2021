function main(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    console.log(biggestNum);
}

main([[20, 50, 10], [8, 33, 145]]); //145