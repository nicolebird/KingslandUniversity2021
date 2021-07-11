function main(input) {
    input.sort((num1, num2) => sortByLength(num1, num2)).forEach(num => console.log(num));

    function sortByLength(num1, num2) {
        return num1.length - num2.length || sortByName(num1, num2);
    }

    function sortByName(num1, num2) {
        return num1.toLowerCase().localeCompare(num2.toLowerCase());
    }

}

main(['alpha', 'beta',  'gamma']); //beta alpha gamma
main(['Isacc', 'Theodor',  'Jack',  'Harrison', 'George']); //Jack Isacc George Theodor Harrison

//Write a function that orders a given array of strings by length in ascending order as primary criteria, and by alphabetical value in ascending order as secondary criteria. The comparison should be case-insensitive. The input comes as an array of strings. The output is the ordered array of strings.
//Hints An array can be sorted by passing a comparing function to the Array.sort() function. Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. If the two items are the same by the main criteria (the result of the compare is 0), we need to compare by the second criteria and the result of that comparison is the result of the comparing function. 
