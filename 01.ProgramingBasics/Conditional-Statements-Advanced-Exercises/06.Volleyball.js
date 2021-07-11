function main(yearType, numHolidays, numWeekends) {
    let sofiaWeekends = 48 - numWeekends;
    let sofiaHoliGames = numHolidays * (2/3); 
    let sofiaWeekendGames = sofiaWeekends * (3/4);
    let totalGames = sofiaHoliGames + sofiaWeekendGames + numWeekends;
    if (yearType == "leap") {
        totalGames = totalGames + (totalGames * 0.15);
        console.log(Math.floor(totalGames));
    } else {
        console.log(Math.floor(totalGames));
    }
}
main("leap", 5, 2);