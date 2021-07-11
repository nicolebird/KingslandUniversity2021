//Write a function to store students with all their grades.
//If student appears more than once add the new grades
//At the end print the student's sorted by average grade.

// function main(studentGradeInformation){
//     let gradeBook = new Map();
    
//     for (let studentInformation of studentGradeInformation) {
 
//         let informationArray = studentInformation.split(` `); 
//         let studentName = informationArray.shift();
//         let grades = informationArray.map(Number);

//         if(gradeBook.has(studentName)){
//             let currentGrades = gradeBook.get(studentName);
//             let fullGrades = currentGrades.concat(grades);
//             gradeBook.set(studentName, fullGrades);
           
//         }else {
//             gradeBook.set(studentName, grades);
//         }
//     }
 
//     let sorted = Array.from(gradeBook).sort((student1,student2)=>{
//         average(student1[1]) - average(student2[1]);
//     });

//     for(let student of sorted){
//         console.log(`${student[0]}: ${student[1].join(`, `)}`);
//     }
// }


// function average(listOfNumbers){
//     let sum = 0;

//     for (let i = 0; i < listOfNumbers.length; i++) {
//         sum += listOfNumbers[i];
//         //sum = sum + listOfNumbers[i];
//     }
//     return sum / listOfNumbers.length;
// }

function main(studentGradeInfo) {
    let gradeBook = new Map();
    for (let studentInfo of studentGradeInfo) {
        let infoArray = studentInfo.split(` `); //[`name`,`4`,`5`,`6`,`7`]
        let studentName = infoArray.shift();
        let grades = infoArray.map(Number);
        if (gradeBook.has(studentName)) {
            let currentGrades = gradeBook.get(studentName);
            let fullGrades = currentGrades.concat(grades);
            gradeBook.set(studentName, fullGrades);
        } else {
            gradeBook.set(studentName, grades);
        }
    }
    let gradeBookArray = Array.from(gradeBook.entries());
    // [`tim`, [4,6,6,5]]
    let sorted = gradeBookArray.sort(function(student1, student2) {
        let st1Avg = average(student1[1]);
        let st2Avg = average(student2[1]);
        return st1Avg - st2Avg;
        //return average(student1[1]) - average(student2[1]);
    });
    for (let student of sorted) {
        console.log(`${student[0]}: ${student[1].join(`, `)}`);
    }
}

function average(listOfNumbers) {
    let sum = 0;
    for (let i = 0; i < listOfNumbers.length; i++) {
        sum += listOfNumbers[i];
    }
    return sum / listOfNumbers.length;
}

main([`Lilly 4 6 6 5`, `Tim 5 6`, `Tammy 2 4 3`, `Tim 6 6`]);