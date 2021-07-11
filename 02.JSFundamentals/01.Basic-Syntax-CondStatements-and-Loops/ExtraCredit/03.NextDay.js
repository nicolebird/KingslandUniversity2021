//Write a JS function that calculates the date of the next day by given year, month and day.

//The input comes as three number parameters.  The first element is the year, the second is the month and the third is the day.

//The output should be returned as a result of your function.  

//HINTS: Use Date()

function nextDay(year,month,day){
    let date = new Date(year,month,day);
    let tomorrow = date.setDate(date.getDate(month,year,day)+ 1);
    let y = date.getFullYear(tomorrow);
    let m = date.getMonth(tomorrow);
    let d = date.getDate(tomorrow);

    if(d == 30 && m == 04 || m == 06 || m == 09 || m == 11){
        m += 1;
        d = 01;
    } else if(m == 02 && d == 29){
        m += 1;
        d = 01;
    }
    console.log(`${y}-${m}-${d}`);  // 2016-10-1
}

nextDay(2016,9,30);  // 2016-10-1

