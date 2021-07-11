//You are given a group of people, type of the group, and day of the week they are going to stay.  Based on that information calculate how many they have to pay and print that price on the console.  Use the table below.  In each cell is the prince for a single person.  The output should look like that: 
//"Total price: {price}".  The price should be formatted to the second decimal point.

// Friday: Student is 8.45, Business is 10.90, Regular is 15
//Saturday: Student is 9.80, Business 15.60, Regular 20
//Sunday: Student is 10.46, Business 16, Regular 22.50

//There are also discounts based on some conditions:
//STUDENTS - if the group is bigger than or equal to 30 people you should reduce the total price by 15%
//BUSINESS - if the group is bigger than or equal to 100 people 10 of them can stay for free.
//Regular - if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
//YOU SHOULD REDUCE THE PRICES IN THAT EXACT ORDER

//Challenge yourself to try this in the switch case statement layout.

function main(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;
    if (typeOfGroup == "Students") {
        if (dayOfWeek == "Friday") {
            price = 8.45;
        } else if (dayOfWeek == "Saturday") {
            price = 9.80;
        } else if (dayOfWeek == "Sunday") {
            price = 10.46;
        }
    //This covers the students and all three days
    } else if (typeOfGroup == "Business") {
        if (dayOfWeek == "Friday") {
            price = 10.90;
        } else if (dayOfWeek == "Saturday") {
            price = 15.60;
        } else if (dayOfWeek == "Sunday") {
            price = 16;
        }
    //This covers the business and all three days
    } else if (typeOfGroup == "Regular") {
        if (dayOfWeek == "Friday") {
            price = 15;
        } else if (dayOfWeek == "Saturday") {
            price = 20;
        } else if (dayOfWeek == "Sunday") {
            price = 22.50;
        }
    }
    //This covers the Regular and all three days
    let totalPrice = groupOfPeople * price;
    //This let statement covers just the statements below
    if (typeOfGroup == "Students" && groupOfPeople >= 30) {
        totalPrice = totalPrice - (totalPrice * 0.15);
        // totalPrice -= totalPrice * 0.15;
    } else if (typeOfGroup == "Business" && groupOfPeople >= 100) {
        //groupOfPeople = groupOfPeople - 10;
        groupOfPeople = groupOfPeople - 10;
        totalPrice = groupOfPeople * price;
    } else if (typeOfGroup == "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    //These if - else - if statements take into account the discounts
}
main(30, "Students", "Sunday");
main(22, `Regular`, `Friday`);

