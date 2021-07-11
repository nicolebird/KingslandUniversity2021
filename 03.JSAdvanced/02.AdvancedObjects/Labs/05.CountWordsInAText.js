//It needs the array brackets for the code to work
function main(someInput) {
    let wordCount = {}; // I am the counter

    for (let i = 0; i < someInput.length; i += 2) {
        if (!wordCount[someInput[i]]) {
            //console.log(`No key found, the key is`, someArray[i]);
            wordCount[someInput[i]] = +someInput[i + 1];
        } else {
            wordCount[someInput[i]] += +someInput[i + 1];
        }

    }
    JSON.stringify(wordCount);
    console.log(JSON.stringify(wordCount));
}

main(["Far too slow, you're far too slow."]);
//{"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}
main(["JS devs use Node.js for server-side JS. -- JS for devs."]);


//Cagle way
function main(someInput){
    let wordCount = {};
    let search = someInput[0].split(/[^A-z]/gm).filter(word => word.length > 0);
    //return the value of word.length > 0
    console.log(search);

    for (let word of search){
        wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
    }
    console.log(JSON.stringify(wordCount));
}

main([`Far too slow, you're far too slow.`]);
//{"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}
main([`JS devs use Node.js for server-side JS. -- JS for devs.`]);

//Gregs way
function main(textToCount){
    countTheWord(textToCount);
}

function countTheWord(textArray){
    let total = {};

    for(const str of textArray){
        let sameWord = str.match(/\w+/g);
        for(const word of sameWord){
            if(total[word]){
                total[word]++;
            }else{
                total[word] = 1;
            }
        }
    }
    console.log(JSON.stringify(total));
}

main([`Far too slow, you're far too slow.`]);
//{"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}
main([`JS devs use Node.js for server-side JS. -- JS for devs.`]);