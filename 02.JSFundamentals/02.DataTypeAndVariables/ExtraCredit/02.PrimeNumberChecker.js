function main(number) {
    let output = false;
    if (number === 1) {
        output = false;
    } else if (number === 2) {
        output = true;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                output = false;
                break;
            }
            output = true;
        }
    }
    console.log(output);
}
main(81);
main(22);

//Another way
// function main(isItPrime) {
//     let trueOrFalse = false;
//     for (let modulosNum = 2; modulosNum < isItPrime; modulosNum++) {
//         if (isItPrime % modulosNum == 0) {
//             trueOrFalse = false;
//             break;
//         }
//         trueOrFalse = true;
//     }
//     console.log(trueOrFalse);
// }

// main(81);
// main(22);