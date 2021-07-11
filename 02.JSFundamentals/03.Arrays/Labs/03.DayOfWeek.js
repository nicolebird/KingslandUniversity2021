//Write a program which receives a number and prints the corresponding name of the day of week.  If the number is NOT a valid, `Invalid day!`

function main(day){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //arrays should be plural
    
    if(day >= 1 && day <= 7){
    //if day is greater then or equal to 1 AND day is less than or equal to 7.  This is because there are only 7 days in a week and this includes just that perimeter.
        console.log(days[day - 1]);
    }else{
    //This takes into account those numbers outside of 1-7 because that are irrelevant
        console.log("Invalid day!");
    }
}

main(3); //Wednesday
main(6);//Saturday
main(11);//Invalid day!
main(-3); //Invalid day!