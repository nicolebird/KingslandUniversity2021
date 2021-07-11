//Write a function, which prints common elements in two string arrays.  Print all the matches on separate lines.  Compare the first array with the second array.

//Using a nest for-for-if statement works well with this problem.

function main(firstStringArray, secondStringArray) {
    //firstArray is equal to first stringArray
    //secondArray is equal to second stringArray
    for (let i=0;i<firstStringArray.length;i++){
        for (let j=0;j<secondStringArray.length;j++){
            if (firstStringArray[i]===secondStringArray[j]){
                //this compares the first and second string array
                console.log(secondStringArray[j]);
            }
        }
    }
}
main(["Hey", "hello", 2, 4, "Peter", "e"], ["Petar", 10, "hey", 4, "hello", "2"]);






