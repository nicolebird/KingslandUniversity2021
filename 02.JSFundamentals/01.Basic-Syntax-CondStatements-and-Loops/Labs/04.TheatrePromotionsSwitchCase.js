//A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket.  If the given age does not fit one of the categories, you should print "Error!".  You can see the prices in the table below:
//Weekday: 0<= age <= 18   18< age <= 64    64 < age <= 122
        //     12$              18$             12$
//Weekend:     15$              20$             15$
//Holiday:     5$               12$             10$

//INPUT: The input comes in two parameters.  The first one will be the type of day (string).  The second - the age of the person (number).

//OUTPUT: Print the price of the ticket according to the table, or "Error!" if the age is not in the table.

//CONSTRAINTS:  The age will be in the interval [-1000...1000]
//              The type of day will always be valid
//The switch case locks the cases into the day of week and boxes in the if-else-if statements to cover the ages.  The console logs per age are included.

function main(typeOfDay, customerAge){

    switch(typeOfDay){
        case "Weekday":
            //customerAge check
            if (customerAge >=0 && customerAge <= 18){
                console.log("12$");
            }else if(customerAge > 18 && customerAge <= 64){
                console.log("18$");
            }else if(customerAge > 64 && customerAge <= 122){
                console.log("12$");
            }else{
                console.log("Error!");
            }
            break;
        case "Weekend":
            //customerAge check
            if (customerAge >=0 && customerAge <= 18){
                console.log("15$");
            }else if(customerAge > 18 && customerAge <= 64){
                console.log("20$");
            }else if(customerAge > 64 && customerAge <= 122){
                console.log("15$");
            }else{
                console.log("Error!");
            }
            break;
        case "Holiday":
            //customerAge check
            if (customerAge >=0 && customerAge <= 18){
                console.log("5$");
            }else if(customerAge > 18 && customerAge<= 64){
                console.log("12$");
            }else if(customerAge > 64 && customerAge <= 122){
                console.log("10$");
            }else{
                console.log("Error!");
            }
            break;
    }


}

main(`Weekday`, 42); //18$