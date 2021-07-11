//Write a function that receives a single number and checks if the grade is excellent or not.  If it is, print "Excellent", otherwise print "Not excellent"  <--- this is the hint to it being a simple if-else statement
//HINT: Check if the number given is greater or equal to 5.50 and print the corresponding result

function excellentGrade(grades){
    if(grades >= 5.50){
        console.log("Excellent");
    }else{
        console.log("Not excellent");
    }
}

excellentGrade(5.0); //Not excellent
excellentGrade(4.99999999); //not excellent
excellentGrade(2.2); //not excellent
excellentGrade(5.97); //excellent

