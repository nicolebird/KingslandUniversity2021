//Write a function to find all the top integer in an array. A top integer is an integer which is bigger than all the elements to its right.

//OUTPUT: Print all top integers on the console, separated by a single space.

//re-write this whole code and explain it  further to make it stick better.  No being lazy.  Also add all mains from the example.

function main(numberList) {
    let topIntegers = "";
    for (let i = 0; i < numberList.length; i++) {
        let maxNumber = true;
        for (let j = i + 1; j < numberList.length; j++) {
            if (numberList[i] <= numberList[j]) {
                maxNumber = false;
                break;
            }
        }
        if (maxNumber) {
            topIntegers += `${numberList[i]} `;
        }
    }
    console.log(topIntegers.trim());
    //The trim () method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
}

main([1, 4, 3, 2]); //4 3 2
main([14,24,3,19,15,17]); //24 19 17
main([41,41,34,20]); //41 34 20
main([27,19,42,2,13,45,48]); //48


