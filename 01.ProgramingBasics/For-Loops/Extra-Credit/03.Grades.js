function main(studentsWhoAttended, gradeOfTheExam) {
    let topStudents = 0;
    let fourToFourNineNine = 0;
    let threeToThreeNineNine = 0;
    let fail = 0;
    let sum = 0;
    let average = 0;

    for (i = 0; i <= studentsWhoAttended; i++) {
        let currentGrade = gradeOfTheExam[i]; {
            if (currentGrade >= 5.00) {
                //if the current grade is greater than or equal to 5.00
                topStudents++;
                //topStudents = topStudents + 1
            } else if ((currentGrade >= 4.00) && (currentGrade <= 4.99)) {
                //if the current grade is greater than or equal to 4.00 AND less than or equal to 4.99
                fourToFourNineNine++;
                //fourToFourNineNine = fourToFourNineNine + 1
            } else if ((currentGrade >= 3.00) && (currentGrade <= 3.99)) {
                //if the current grade is greater than or equal to 3.00 AND less than or equal to 3.99 
                threeToThreeNineNine++;
                //threeToThreeNineNine = threeToThreeNineNine + 1
            } else if (currentGrade < 3.00) {
                //if currentGrade is less than 3.00
                fail++;
                //fail = fail + 1
            }
        }
    }

    for (i = 1; i <= studentsWhoAttended; i++) {
        sum += gradeOfTheExam.shift(); 
    }

            topStudents = (topStudents / studentsWhoAttended) * 100;
            //take topStudents equal to topStudents divided by studentsWhoAttended then multiply it by 100
            fourToFourNineNine = (fourToFourNineNine / studentsWhoAttended) * 100;
            //take topStudents equal fourToFourNineNine divided by studentsWhoAttended then multiply it by 100
            threeToThreeNineNine = (threeToThreeNineNine / studentsWhoAttended) * 100;
            //take topStudents equal to threeToThreeNineNine divided by studentsWhoAttended then multiply it by 100
            fail = (fail / studentsWhoAttended) * 100;
            //take topStudents equal to fail divided by studentsWhoAttended then multiply it by 100
            average = sum / studentsWhoAttended;
            //divide sum by studentsWhoAttended to get the average

            //This will end with 4 possible options depending on numbers inputted 
            console.log(`Top Students: ${topStudents.toFixed(2)}%`);
            console.log(`Between 4.00 and 4.99: ${fourToFourNineNine.toFixed(2)}%`);
            console.log(`Between 3.00 and 3.99: ${threeToThreeNineNine.toFixed(2)}%`);
            console.log(`Fail: ${fail.toFixed(2)}%`);
            console.log(`Average: ${average.toFixed(2)}`);
}
    
   
main(10, [3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);