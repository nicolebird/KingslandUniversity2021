//Calculate and print the sum of the first and the last elements in an array.
//The input comes as array of string elements holding the numbers
//The output is the return value of your function

function main(input){
    input = input.map(Number);
    //The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. ... Note: this method does not change the original array.
    console.log(input[0] + input.pop());
    // The pop() method removes the last element from an array and returns that element. This method changes the length of the array
}

main([`5`,`10`]); //15
main([`20`,`30`,`40`]); //60

//ANOTHER WAY
function main(numbers){
    for(let index in numbers){
    //always starts at zero and ends at the last item
        numbers[index] = Number(numbers[index]);
    }
    let output = numbers[0] + numbers.pop();
    console.log(output);
}
main([`5`,`10`]); //15
main([`20`,`30`,`40`]); //60

//Another way
function main(array){
    let lastItem = Number(array.pop());
    console.log(Number(lastItem) + Number(array[0]));
}
main([`5`,`10`]); //15
main([`20`,`30`,`40`]); //60

