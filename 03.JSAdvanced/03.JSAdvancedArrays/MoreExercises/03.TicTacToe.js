function main(input) {
    let array = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';

    for (let line of input) {
        [currRow, currCol] = line.split(' ').map(Number);

        if (array[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        array[currRow][currCol] = player;

        //check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                array[i][0] === player &&
                array[i][1] === player &&
                array[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                array[0][i] === player &&
                array[1][i] === player &&
                array[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }

        //check left to right
        if (
            array[0][0] === player &&
            array[1][1] === player &&
            array[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        //check right to left
        else if (
            array[0][2] === player &&
            array[1][1] === player &&
            array[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        let theresFalse = false;

        for (let row = 0; row < array.length; row++) {
            if (array[row].includes(false)) {
                theresFalse = true;
            }
        }

        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function printMatrix() {
        for (let row = 0; row < array.length; row++) {
            console.log(array[row].join('\t'));
        }
    }
}

main(["0 1",  "0 0",  "0 2",   "2 0",  "1 0",  "1 1",  "1 2",  "2 2",  "2 1",  "0 0"]);
//Player O wins!
// O	X	X
// X	O	X
// O	false	O
main(["0 0",  "0 0",  "1 1",  "0 1",  "1 2",  "0 2",  "2 2",  "1 2",  "2 2",  "2 1"] );
//This place is already taken. Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false

main(["0 1",  "0 0",  "0 2",  "2 0",  "1 0",  "1 2",  "1 1",  "2 1",  "2 2",  "0 0"]);
// The game ended! Nobody wins :(
//     O	X	X
//     X	X	O
//     O	O	X

