function main(poorGradesAllowed, problemsAndGrades) {
    let cursor = 0;
    let sum = 0;
    let numOfPoorGrades = 0;
    const poorGradeBoundary = 4;
    const stopWord ="Enough";
    while (cursor < problemsAndGrades.length) { 
        let currentProblemName = problemsAndGrades[cursor];
        if (currentProblemName==stopWord){ //Exit the loop when problem name is enough
            let numberOfProblems = cursor/2;
            let avgGrades = sum / numberOfProblems;
            let lastProblemName = problemsAndGrades[cursor-2];
            console.log(`Average score: ${avgGrades.toFixed(2)}`);
            console.log(`Number of problems: ${numberOfProblems}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }
        let currentGrade = problemsAndGrades[cursor+1];
        //Check if it is truly a poor grade
        if (currentGrade <= poorGradeBoundary){
            numOfPoorGrades+=1;
        }
        //Check whether we have exceeded the number of poor grades allowed
        if (numOfPoorGrades >= poorGradesAllowed){
            console.log(`You need a break, ${numOfPoorGrades} poor grades.`);
            break;
        }
        sum += currentGrade;
        cursor+=2;
    }
}

//main(3,  ['Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);
main(2, ["Income", 3, "G,ame Info", 6, "Best Player", 4]);




// What is const in JavaScript?
// JavaScript const variables must be assigned a value when they are declared: The keyword const is a little misleading. It does NOT define a constant value. It defines a constant reference to a value. Because of this, we cannot change constant primitive values, but we can change the properties of constant objects