//Shorter version
function printCookingNums(inputArr) {
    const operations = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => ++x,
        bake: (x) => x *= 3,
        fillet: (x) => x *= 0.8
    };

    let number = Number(inputArr.shift());

    inputArr.forEach(op => console.log(number = operations[op](number)));
}

main(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
main([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);




//Correct code but longer
function main(input) {
    let number = Number(input[0]);
    //let num = +input[0];

    for (let i = 1; i < input.length; i++) {

        if (input[i] === 'chop') {
            //number = number / 2;
            number /= 2;
            console.log(number);
        }else if (input[i] === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        }else if (input[i] === 'spice') {
            number += 1;
            console.log(number);
        }else if (input[i] === 'bake') {
            number *= 3;
            console.log(number);
        }else  {
            //number = number - 1.2;
            number -= 1.2;
            console.log(number);
        }
    }
}
main(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
main([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);