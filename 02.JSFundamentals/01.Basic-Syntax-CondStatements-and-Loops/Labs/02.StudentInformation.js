//You will be given 3 parameters - student name (string), age (number), and average grade (number).  Your task is to print all the information about the student in the following format.  The grade should be formatted to the second decimal point:

//`Name: {student name}, Age: {student age}, Grade: {student grade}`.

function main(studentName, studentAge, averageGrade){
//You will be given 3 parameters: student name (string), student age (number), average grade (number)
    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${averageGrade.toFixed(2)}`);
    //print all the information about the student in the following format.  REMINDER: format to the second decimal point using the .toFixed()
}

main(`John`, 15, 5.54678); //Name: John, Age: 15, Grade: 5.55
main(`Steve`, 16, 2.1426); //Name: Steve, Age: 16, Grade: 2.14
main(`Mary`, 12, 6.00); //Name: Mary, Age: 12, Grade: 6.00

//sometimes simple seems so complex