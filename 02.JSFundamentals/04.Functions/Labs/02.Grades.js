//Write a function that RECEIVES A GRADE.  The parameters for the grade are between 2.00 and 6.00 and print the corresponding grade in words

//2.00 - 2.99 `Fail`  USE:  >= 2.00 && <= 2.99
//3.00 - 3.49 `Poor`  USE: > 2.99 && <= 3.49
//3.50 - 4.49 `Good` USE: > 3.49 && <= 4.49
//4.50 - 5.49 `Very Good`  USE: > 4.49 && <= 5.49
//5.50 - 6.00 `Excellent`  USE: > 5.49 && <= 6.00
//USING THE PARAMETERS THAT WAY LEAVES NO ROOM FOR GREY AREAS SUCH AS 4.4999999 WHICH WOULDN'T RESULT IN AN ANSWER.

//input: 3.33  OR   4.50   OR  2.99
//output: Poor  OR   Very Good   OR   Fail

function main(input){
    console.log(grades(input));
}
//this is used here when it is about the input.  If after the function, it would be used for the output portion.

function grades(grade){
    if(grade >= 2.00 && grade <= 2.99){
        // console.log(`Fail`);
        return `Fail`;
    } else if(grade > 2.99 && grade <= 3.49){
        // console.log(`Poor`);
        return `Poor`;
    } else if(grade > 3.49 && grade <= 4.49){
        //console.log(`Good`);
        return `Good`;
    } else if(grade > 4.49 && grade <= 5.49){
        // console.log(`Very Good`);
        return `Very Good`;
    } else if(grade > 5.49 && grade <= 6.00){
        // console.log('Excellent');
        return `Excellent`;
    }
}


main(3.33); //Poor
main(4.50); //Very Good
main(2.99);  //Fail