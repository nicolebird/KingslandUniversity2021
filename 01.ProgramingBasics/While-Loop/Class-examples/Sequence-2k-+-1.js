function sequence(inputNumber){
    let k = 1;
    while (k <= inputNumber){
        console.log(k);
        k = k * 2 + 1;
        //k *= 2;
        //k++
    }
}

sequence(5);
sequence(10);

//use function main for HW grader
// k was used in the example for the iterator (i)

//for loop, example

//function main(inputNumber){
////for (let i = 1; i < inputNumber; i = i * 2 + 1){
//////console.log(i);
//  }  
//}