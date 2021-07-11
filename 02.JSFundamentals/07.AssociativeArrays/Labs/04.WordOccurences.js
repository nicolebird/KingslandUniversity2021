//Write a function that counts the times each word occurs in a text.  Print the words sorted by count in descending order. The input comes as an array of strings.

//INPUT: ["Here", "is", "the", "first", "sentence", "And", "finally", "the", "third", "sentence"]

//HINTS: **Create a map, **Loop through the elements of the array of words  **Update the map  **Sort the map by value in descending order 
//**let sorted = Array.from(map).sort((a, b) => b[1] - a[1]); */
//**Finally, print the result in format as the example above */

function main(wordArray){
    let map = new Map();
        wordList = [];

    for(let string of wordArray){
        let counter = 1;

        if(map.has(string)){
            let wordCount = map.get(string);

            map.set(string, wordCount + 1);
        }else{
            map.set(string, counter);
        }
    }
    wordList = Array.from(map).sort((a, b) => b[1] - a[1]);
    wordList.forEach((word)=> {
        console.log(`${word[0]} -> ${word[1]} times`);
    });
}

main(["Here", "is", "the", "first", "sentence", "And", "finally", "the", "third", "sentence"]);