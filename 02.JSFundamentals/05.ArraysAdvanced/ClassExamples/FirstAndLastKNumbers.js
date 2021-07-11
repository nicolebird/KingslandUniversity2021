//You are given an array of numbers
//The first element holds an integer k
//Print the first k and the last k from the other elements in the array (space separated)

function firstLastKElement(arrayOfNumbers){
    let kItems = arrayOfNumbers.shift();
    console.log(arrayOfNumbers.slice(0,kItems).join(` `));
    console.log(arrayOfNumbers.slice(arrayOfNumbers.length - kItems, arrayOfNumbers.length).join(` `));
}

firstLastKElement([2,7,8,9]); // 78  89
firstLastKElement([3,6,7,8,9]); // 678  789