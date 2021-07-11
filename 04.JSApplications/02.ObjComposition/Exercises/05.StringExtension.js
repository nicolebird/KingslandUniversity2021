// Extend the build-in String obj w/ additional functionality.  Implement the following fxs:  
// ensureStart(str) - append str to the beginning of a string, only if it's not already present  
// ensureEnd(str) - append str to the end of a string, only if it's not already present 
//isEmpty() - return true if  the string is emplty, false otherwise  truncate(n) - truncates the string to n characters by removing words and appends an ellipsis(three periods) to the end.  If a string is less than n characters long, return the same string.  If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.  If no space occurs anywhere in the string, return n - 3 characters and an ellipsis.  If n is lass than 4, return n number of periods.  
//format(string, ...params) - static method to replace placeholders w/ parameters.  A placeholder is a number surrounded by curly braces.  If the parameter index cannot be found for a certain placeholder, do not modify it.  Note static methods are attached to the String obj instead of its prototype.  
//NOTE strings are immutable, so your fxs will return new strings as a result. 

//INPUT/OUTPUT:  Your main code should be structured as a IIFE without input or output - it should modify the existing String prototype instead.  Input and output of the extension fxs should be described as above. 

//main code should be structured as a IIFE without input or output - it should modify the existing String prototype instead.
function main(){
    let k = (function () {
        // should not use other string methods it may cause side effects
        
        // ensureStart(str) - append str to the beginning of a string, only if it's not already present 
        String.prototype.ensureStart = function (str) {
        //String.prototype.ensureStart = (str) =>{  <- tried this but it messed up in the HW grader.  Looks pretty so I left it as a what not to do
            if (!this.startsWith(str)) {
                return str + this;
            }

            return this.toString();
        };

        // ensureEnd(str) - append str to the end of a string, only if it's not already present 
        String.prototype.ensureEnd = function (str) {
        //String.prototype.ensureEnd = (str) => { <- tried this but it messed up in the HW grader.  Looks pretty so I left it as a what not to do
            if (!this.endsWith(str)) {
                return this + str;
            }

            return this.toString();
        };
        //isEmpty() - return true if  the string is empty, false otherwise  
        String.prototype.isEmpty = function () {
        //String.prototype.isEmpty = () => {  <- tried this but it messed up in the HW grader.  Looks pretty so I left it as a what not to do
            return this.length === 0;
        };

        //truncate(n) - truncates the string to n characters by removing words and appends an ellipsis(three periods) to the end.  If a string is less than n characters long, return the same string.  If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.  If no space occurs anywhere in the string, return n - 3 characters and an ellipsis.  If n is lass than 4, return n number of periods. 
        String.prototype.truncate = function (n) {
        //String.prototype.truncate = (str) => { <- tried this but it messed up in the HW grader.  Looks pretty so I left it as a what not to do
            if (n < 4) {
                return '.'.repeat(n);
            } else if (n >= this.length) {
                return this.toString();
            } else {
                let indexOf = this.substring(0, n - 2).lastIndexOf(' ');

                if (indexOf !== -1) {
                    return this.substring(0, indexOf).toString() + '...';
                } else {
                    return this.substring(0, n - 3).toString() + '...';
                }
            }
        };

        //format(string, ...params) - static method to replace placeholders w/ parameters.  A placeholder is a number surrounded by curly braces.  If the parameter index cannot be found for a certain placeholder, do not modify it.  Note static methods are attached to the String obj instead of its prototype.
        String.format = function (str) {
        //String.format = (str) => { <- tried this but it messed up in the HW grader.  Looks pretty so I left it as a what not to do
            for (let i = 0; i < arguments.length; i++) {
                const element = arguments[i + 1];
                if (element === undefined) {
                    break;
                }
                if (str.includes(`{${i}}`)) {
                    str = str.replace(`{${i}}`, element);
                }
            }

            return str;
        };
    }());
}
let str = 'mystring';
str = str.ensureStart('my');
str = str.ensureStart('hello');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox','quick', 'brown');
str = String.format('jumps {0} {1}','dog');
