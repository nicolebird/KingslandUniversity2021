//Take two integers and k
//Generate and print the following sequence:
//The first element is = 1
// //All other elements = sum of the previous k elements

//This is not 100% right
// function main(numberOfItemsInList, k){
//     let seq = [1];
//     for (let i = 1; i < numberOfItemsInList; i++){
//         let start = Math.max(0, i - k);
//         let end = i - 1;
//         let sum =0; 
//         seq[i] = sum; 
//     }
//     console.log(seq.join(` `));
// }

// main([6,3]); //1 1 2 4 7 13
// main([8,2]); //1 1 2 3 5 8 13 21
// main(9,5);  //1 1 2 4 8 16 31 61 120

//Another way (correct) to do this

function main(numberOfItemsInList, lookAtBackNumber){
    let sequence = [1];
    for(let i = 1; i < numberOfItemsInList; i++){
        let start = 0;
        if(i - lookAtBackNumber >= 0){

        }
        let end = i - 1;

        let sum = makeSum(start,end,sequence);

        sequence.push(sum);
    }
}

function makeSum(start,end,array){
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += array[i];
    }
}

main([6,3]); //1 1 2 4 7 13
main([8,2]); //1 1 2 3 5 8 13 21
main(9,5);  //1 1 2 4 8 16 31 61 120

