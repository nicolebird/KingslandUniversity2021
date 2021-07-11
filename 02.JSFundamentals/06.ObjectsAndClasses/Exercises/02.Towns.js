// You’re tasked to create and print objects from a text table.

// You will receive the input as an array of strings, where each string represents a table row, with values on the row , separated by pipes " | " and spaces.

// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 

// The latitude and longitude columns will always contain valid numbers. 

// Remember to check the examples to get a better understanding of your task.

// The output should be objects. 

// Latitude and longitude must be parsed to numbers and formatted to the second decimal point!
// Definition and usage of parse
// Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers. The browser parses HTML into a DOM tree. ... JavaScript is also downloaded, parsed, and then execute
// //Definition and Usage of .parseFloat()
// The parseFloat() function parses a string and returns a floating point number. This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.

//TRY TO BETTER UNDERSTAND THIS


function main(towns) {

    for (i = 0; i < towns.length; i++) {

        let currentTown = {};
        let townsString = towns[i];
        let townsArray = townsString.split("|");
        //the let statements above are declaring key words and what they will mean
        currentTown.town = townsArray[0].trim();
        currentTown.latitude =  parseFloat(townsArray[1].trim()).toFixed(2);
        //The parseFloat() function parses a string and returns a floating point number. This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.
        currentTown.longitude = parseFloat(townsArray[2].trim()).toFixed(2);

        console.log(currentTown);

    }

}

// function towns(array) {

//     class Town {

//         constructor(townName,latitude, longitude) {
//         //A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.

//             this.townName;

//         }

//     }

// }
main(["Atlanta | 33.753746 | -84.386330","Beijing | 39.913818 | 116.363625"]); 
//OUTPUT:  { town: `Atlanta`, latitude: `33.76`, longitude: `-84.39`}
//         { town: `Beijing`, latitude: `39.91`, longitude: `116.36`}