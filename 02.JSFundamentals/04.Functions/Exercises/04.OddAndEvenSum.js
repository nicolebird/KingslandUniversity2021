//You will receive a single number.  You have to write a function, that returns the sum of all even and all odd digits from that number.

//input: 1000435   OR  3495892137259234
//output: Odd sum = 9, Even sum = 4   OR   Odd sum = 54, Even sum = 22

function oddEvenSum(number) {
    let list = number.toString().split("");
    // The split() method is used to split a string into an array of substrings, and returns the new array. Tip: If an empty string ("") is used as the separator, the string is split between each character.
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < list.length; i++) {
        let currentNumber = Number(list[i]);
        if (currentNumber % 2 == 0) {
            evenSum +=currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    //Do not place a console log here.  It conflicts with the second function's console log
}
function main(number) {
    let output = oddEvenSum(number);
    console.log(output.trim());
}
main(1000435);  //Odd sum = 9, Even sum = 4
main(3495892137259234); // Odd sum = 54, Even sum = 22
