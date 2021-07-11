//Write a function that receives a grade a grade between 2.00 and 6.00 and prints out the corresponding grade in words.

//Between 2.00 and 2.99 -`Fail`
//Between 3.00 and 3.49 - `Poor`
//Between 3.50 and 4.49 - `Good`
//Between 4.50 and 5.49 - `Very Good`
//Between 5.50 and 6.00 - `Excellent`

function grades (grade){
    if(grade >= 2.00 && grade <= 2.99){
        console.log(`Fail`);
        //return `Fail`;  not the same as a console log.  It RETURNS it the console log
    }else if(grade <= 3.00 && grade <= 3.49){ ///3.499
        console.log(`Poor`);
        //return `Poor`;
    }else if(grade > 3.49 && grade <= 4.49){
        console.log(`Good`);
        //return `Good`;
    } else if(grade > 4.49  && grade <= 5.49){
        console.log(`Very Good`);
        //return `Very Good`;
    }else if(grade > 5.49 && grade <= 6.00){
        console.log(`Excellent`);
        //return `Excellent`;
    }
}
function main(input){
    grader(input);
}

grades(1.00);
grades(4.95);
grades(4.32);
