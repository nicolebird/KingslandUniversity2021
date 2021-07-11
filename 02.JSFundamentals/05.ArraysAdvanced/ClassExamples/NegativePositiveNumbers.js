//You are given an array of numbers 
//Process them one by one and produce a new array
//Prepend each negative element at the from of result
//Append each positive (or 0) element at the end of result
//Print the result array, each element at separate lines

function main(inputArray){
    let output = [];
    for(let numbers of inputArray){
        if(numbers < 0){
            output.unshift(numbers); //Insert one at the start
            //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
        } else {
            output.push(numbers); //Append at the end
        }
        console.log(output.join(`\n`));
        //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
        //  \n this leads to a new line
    }
}

main([7,-2,8,9]);
main([3,-2,0,-1]);
main([-3,2,-1,0]);