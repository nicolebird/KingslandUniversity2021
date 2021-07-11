function main(hours, minutes, seconds) {
    let currentHours = hours;
    let currentMinutes = minutes;
    let currentSeconds = seconds;
    while (currentHours <= 23) {
        if (currentHours < 10) {
            //if current minutes are less than 10 minutes.  This ensures there are 2 digits in the minutes.
            currentHours = "0"+currentHours; 
        }
        while (currentMinutes <= 59) {
            if (currentMinutes < 10) {
                //if current minutes are less than 10 minutes.  This ensures there are 2 digits in the minutes.
                currentMinutes = "0"+currentMinutes;
            }
            while (currentSeconds <= 59) {
                if (currentSeconds < 10) {
                    //if current minutes are less than 10 minutes.  This ensures there are 2 digits in the minutes.
                    currentSeconds = "0"+currentSeconds;   
                }
                console.log(`${currentHours}:${currentMinutes}:${currentSeconds}`);
                currentSeconds++;
                //this incriments seconds by 1.  Same as currentSeconds + 1
            }
            if (currentSeconds > 59) {
                currentSeconds = 0;
                //this makes the seconds move up to the seconds when greater than 59 seconds
            }
            currentMinutes++;
        }
        if (currentMinutes > 59) {
            currentMinutes = 0;
            //this makes the seconds move up to the minutes when greater than 59 seconds
        }
        currentHours++;
        //this makes the hours move up by 1.  Same as currentHours + 1
        
        
    }

}
main(21, 59, 58);
main(22, 38, 56);