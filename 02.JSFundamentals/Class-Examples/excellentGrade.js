//Write a function that receives a single number and checks if the grade is excellent or not.
//If it is, print "Excellent", otherwise print "Not excellent"

function solve(grade){
    if(grade >= 5.50){
        console.log("Excellent");
    }else{
        console.log("Not excellent");
    }
}

solve(5.50);
solve(4.35);

//use edge cases to help make sure the code is right.  so 5.50 is the high number given.  Try 5.4, 5.6, 5.35