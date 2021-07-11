function main (month, numberOfNights) {
    let studioPrice = 0.00;
    let apartmentPrice = 0.00;

    if ((month == "May") || (month == "October")) {

        studioPrice = 50 * numberOfNights; 
                if ((numberOfNights > 7) && (numberOfNights <= 14)) {
                    studioPrice = studioPrice - (studioPrice * 0.05);
                } else if (numberOfNights > 14) {
                    studioPrice = studioPrice - (studioPrice * 0.30);
                }
        apartmentPrice = 65 * numberOfNights;
    } else if ((month == "June") || (month == "September")) {

        studioPrice = 75.20 * numberOfNights; {
                if (numberOfNights > 14) {
                    studioPrice = studioPrice - (studioPrice * 0.20);
                }
        apartmentPrice = 68.70 * numberOfNights;

    }
    } else if ((month == "July") || (month == "August")) {

        studioPrice = 76 * numberOfNights;
        apartmentPrice = 77 * numberOfNights;
    } else {
        console.log("Choose a different month.");
    }

    if (numberOfNights > 14) {
        apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

main("May", 15);
main("June", 14);
main("August", 20);