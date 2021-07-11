//The input will be a single string

//Find all the special words starting with #.  Words are invalid if it has anything other than letters.

//Print the words you found without the tag on each new line

//this code needs work because it doesn't pass the HW grader

function main (string){
    hashtag(string);
}

function hashtag(string){
    let separate = string.split(' ');
    //this splits the strings into separate strings

    for (let i = 0; i < separate.length; i++) {
        let possibleWords = separate.shift();

        if(possibleWords.startsWith('#') && possibleWords.length >1){
            possibleWords = possibleWords.slice(1);
            let letters = /^[A-Za-z]+$/;
            //this includes all possible letters capitalized and non capitalized
            
            if(possibleWords.match(letters)){
                console.log(possibleWords);
            }
        }
        
    }
    
}

main('Nowadays everyone uses # to tag a #special word in #socialMedia');
main('#123 He#llo #Hi');