//A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket.  If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
//Weekday: 0<= age <= 18   18< age <= 64    64 < age <= 122
        //     12$              18$             12$
//Weekend:     15$              20$             15$
//Holiday:     5$               12$             10$

//INPUT: The input comes in two parameters.  The first one will be the type of day (string).  The second - the age of the person (number).

//OUTPUT: Print the price of the ticket according to the table, or "Error!" if the age is not in the table.

//CONSTRAINTS:  The age will be in the interval [-1000...1000]
//              The type of day will always be valid

function main(typeOfDay, ageOfPerson) {
    let ticketPrice = 0;

    if (ageOfPerson >= 0 && ageOfPerson <= 18) {
        if (typeOfDay == "Weekday") {
          ticketPrice = 12;
        } else if (typeOfDay == "Weekend") {
          ticketPrice = 15;
        } else if (typeOfDay == "Holiday") {
          ticketPrice = 5;
        } 
    }
    //this if statement covers the lowest age range

    if (ageOfPerson > 18 && ageOfPerson <= 64) {
        if (typeOfDay == "Weekday") {
          ticketPrice = 18;
        } else if (typeOfDay == "Weekend") {
          ticketPrice = 20;
        } else if (typeOfDay == "Holiday") {
          ticketPrice = 12;
        } 
    }
    //this if statement covers the next age range and all 3 day options

    if (ageOfPerson > 64 && ageOfPerson <= 122) {
        if (typeOfDay == "Weekday") {
          ticketPrice = 12;
        } else if (typeOfDay == "Weekend") {
          ticketPrice = 15;
        } else if (typeOfDay == "Holiday") {
          ticketPrice = 10;
        } 
    }
    //this if statement covers the next age range and all 3 day options
    
    if (ageOfPerson < 0 && ageOfPerson < 122) {
      console.log("Error!");
    //this brings home the error option
  } else {
    console.log(ticketPrice+"$");
    //this brings home the actual ticket price
  }
}
main("Holiday", -12); //output: Error!
main("Weekday", 42);//output: 18$
main("Holiday", 15);//output: 5$


