//Got it

function main(inputNum){
    let output = "";
    for(let evenNum = 2; evenNum <= inputNum; evenNum += 2){
        for(let oddNum = 1; oddNum <= inputNum; oddNum += 2){
            output += `${evenNum}${oddNum}${evenNum * oddNum} `;
            //HW brutual.  Spacing is a huge trip up

        }

    }
    console.log(output);
}

main(5);

//input number
//5
//1. num.even number 2 - input end
//2 - 4

//2nd num. odd number between 1 and - input number
//1-5

//3rd num.  is a product of the first 2 numbers

//21 23 25 41 43 45

// times 1st and 2nd number
//212 236 2510 414 2312 4520

//tip from Chris Lock
//output += output += `${evenNum}${oddNum}${evenNum * oddNum} `
// could also mean
// output = output + output += `${evenNum}${oddNum}${evenNum * oddNum} `
