//Write a program to receive a number and print all triples of the first n small Latin letters, ordered alphabetically:

function main(number) {

    let triple = "";
    //let triple equal the string

    for (i = 0; i < number; i++) {
        for (j = 0; j < number; j++) {
            for (k = 0; k < number; k++) {
                triple = String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + k);
                console.log(triple);

                //let char1 = String.fromCharCode(97 + i);
                //let char2 = String.fromCharCode(97 + j);
                //let char3 = String.fromCharCode(97 + k);

                //console.log(char1 + char2 + char3);
            }
        }
    }
}
main(3);


// the 97 in the 97 + i comes from the ASCII Chart for the lower case letters
