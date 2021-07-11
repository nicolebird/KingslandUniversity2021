//go to github and see what I copied wrong

function main(wordArray){
    let wordOccurrance = new Map();

    for(let i = 0; i < wordArray; i++){
        let word = wordArray[i];
        if(wordOccurrance.has(word)){
            let numberOfOccurrances = wordOccurrance.get(word);
            numberOfOccurrances++;
            wordOccurrance.set(word,numberOfOccurrances);
        }else{
            wordOccurrance.set(word, 1); 
        }
    }
    
    let sorted = Array.from(wordOccurrance).sort((wordA, wordB) => {
        return wordB[1] - wordA[1];
    });

    for(let [word, timesSeen] of sorted){
        console.log(`${word} -> ${timesSeen[1]} times`);
    }

}

main(["Here", "is", "the", "first", "sentence", "And", "finally", "the", "third", "sentence"]);