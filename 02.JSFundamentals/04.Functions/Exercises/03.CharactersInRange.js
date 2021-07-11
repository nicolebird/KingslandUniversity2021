//Write a function that receives two characters and prints on a single line all the character in between then according to the ASCII code.  Keep in mind that the second character code might be before the first one inside the ASCII table.

//input:  `a`, `d`   OR   `#`, `:`    OR   `C`, `#`
//output:  b c   OR  $ % & ' ( ) * + ,  - . / 0 1 2 3 4 5 6 7 8 9   OR  $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B

function charsInRange(char1, char2) {
    let char1Value = char1.charCodeAt();
    let char2Value = char2.charCodeAt();
    let output = "";
    if (char1Value > char2Value) {
    //This is a basic if-else statement
        for (let i = char2Value + 1; i < char1Value; i++) {
        //Use your for loop shortcut and make necessary changes
            output += `${String.fromCharCode(i)} `;
        }
    } else {
        for (let i = char1Value + 1; i < char2Value; i++) {
            output += `${String.fromCharCode(i)} `;
        }
    }
    return output;
    //return is essentially another version of the console log.
}
function main(char1, char2) {
    let output = charsInRange(char1, char2);
    console.log(output.trim());
}
//This function handles the output and is here because the lesson calls for using two of them
main("a", "d");
main(`#`,`:`);
main(`C`,`#`);