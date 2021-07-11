//You're tasked to create a list of employees and their personal numbers.
//You will receive an ARRAY OF STRINGS.  Each string is an employee name and to assign them a personal number you have to find the LENGTH OF THE NAME (whitespace included).
//TRY TO US AN OBJECT

// At the end print all the list employees in the following format:  "Name: {employeeName} -- Personal Number: {personNumber}"
//EXAMPES:  
//INPUT: [`Sila Butler`, `Adnaan Buckley`, `Juan Peterson`, `Brendan Villarreal`]
//OUTPUT: Name: Sila Butler -- Personal Number: 12  Name: Adnaan Buckley -- Personal Number: 14  Name: Juan Peterson -- Personal Number: 13  Name: Brendan Villarreal -- Personal Number: 18

function main(employeeArray) {
    employees(employeeArray);
}

let employees = function(employeeArray) {
    let employeesObject = {};
    //why was this done like this??
    for (i = 0; i < employeeArray.length; i++) {

        name = employeeArray[i];
        number = name.length;
        employeesObject[name] = number;
    }

    for (let name in employeesObject) {
    //FYI: keyword (key) can be boolean, string, or number
        console.log(`Name: ${name} -- Personal Number: ${employeesObject[name]}`);
    }

};

main(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);