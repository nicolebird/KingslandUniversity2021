//Write a JS function to check whether a year is leap.  Leap years are either divisible by 4 but not by 100 or are divisible by 400.  
//Return the results like the examples above.  Referring to the mains listed.

function leapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        //Leap years are either divisible by 4 but not by 100 OR yea is divisible by 400.
        //Use the modulous for this problem
        //print out yes if this is true
        console.log(`yes`);
    }else{
        //simplified problem because this is an either or situation
        console.log(`no`);
    }
}

leapYear(1984); //output will be `yes`
leapYear(2003); //output will be `no`
leapYear(4); //output will be `yes`
