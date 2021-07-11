function main(day){

    let dayArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    if (dayArray.includes(day)){
        let index = dayArray.indexOf(day);
        console.log(index + 1);       
    } else {      
        console.log('error');
    }
}


main(`Monday`);
main(`Tuesday`);
main(`Wednesday`);
main(`Thursday`);
main(`Friday`);
main(`Saturday`);
main(`Sunday`);
main(`error`);

//Write a function that prints a number between 1 and 7 when a day of week is passed to it as a string and an error message if the string is not recognized.  
//The input comes as a single string argument
//The output should be returned as a result

//Function signature: function main(day)