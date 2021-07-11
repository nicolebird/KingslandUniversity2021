function main(period, arrayOfPatients) {
    //using arrayofPatients reminds me that we are dealing with an array.  Use your reminders within the code to refer back to.

    let treated = 0;
    let untreated = 0;
    let doctor = 7;
    //This starts us with the given starter numbers.  Starting with ZERO untreated, ZERO treated, and 7 doctors.  This is given in the problem.
    for (let i = 1; i <= period; i++) {
        patientsToReview = arrayOfPatients.shift(); {
            if ((i % 3 == 0) && (untreated > treated)) {
                doctor++;
                treated += doctor;
                untreated += patientsToReview - doctor;

            } else if (patientsToReview > doctor) {
                treated += doctor;
                untreated += patientsToReview - doctor;

            } else if (patientsToReview <= doctor) {
                treated += patientsToReview;
            }
        }

    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}


main(9, [20, 549, 247, 291, 933, 244, 880, 168, 849]);

//Definition and Usage:The shift() method removes the first item of an array.
//Note: This method changes the length of the array.
// Note: The return value of the shift method is the removed item.
// Tip: To remove the last item of an array, use the pop() method.
// Note: this method will change the original array.