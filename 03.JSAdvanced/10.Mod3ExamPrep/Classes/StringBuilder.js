//Corrected code and passes the test in the homework grader.  It was an easy fix.
class StringBuilder {
    constructor(someInput) {
        if (typeof someInput === "string") {
            this.newString = someInput.split(""); // original array when we made the object
        } else {
            throw "Argument must be a string";
            //throw new Error "Argument must be a string";  <--- this doesn't work in the homework grader so dropped new Error portion and now it passes.
        }
    }
    append(stringToAdd) {
        // Check to see if stringToAdd is a string, using typeof
        if (typeof stringToAdd === "string") {
            this.newString = this.newString.concat(stringToAdd.split(""));
        } else {
            throw new TypeError("Argument must be a string");
        }
    }
    prepend(stringToAdd) {
        if (typeof stringToAdd === "string") {
            this.newString = stringToAdd.split("").concat(this.newString);
        } else {
            throw new TypeError("Argument must be a string");
        }
    }
    insertAt(stringToAdd, index) {
        if (typeof stringToAdd === "string") {
            let tempArray = stringToAdd.split("");
            this.newString.splice(index, 0, ...tempArray);
            //console.log("My new new string is ", this.newString);
        } else {
            throw new TypeError("Argument must be a string");
        }
    }
    remove(startIndex, givenLength) {
        this.newString.splice(startIndex, givenLength);
    }
    allToUpper() {
        this.newString = this.newString.map(eachLetter => eachLetter.toUpperCase());
    }
    allToLower() {
        this.newString = this.newString.map(eachLetter => eachLetter.toLowerCase());
    }
    toUpper(index) {
        let tempLetter = this.newString[index].toUpperCase();
        this.newString.splice(index, 1, tempLetter);
    }
    toLower(index) {
        let tempLetter = this.newString[index].toLowerCase();
        this.newString.splice(index, 1, tempLetter);
    }
    toString() {
        return this.newString.join("");
    }
}
