function main(day){
    
    switch(day){
        case `Monday`:
            console.log(1);
            break;
        case `Tuesday`:
            console.log(2);
            break;
        case `Wednesday`:
            console.log(3);
            break;
        case `Thursday`:
            console.log(4);
            break;
        case `Friday`:
            console.log(5);
            break;
        case `Saturday`:
            console.log(6);
            break;
        case `Sunday`:
            console.log(7);
            break;
        default:
            console.log("error");
            break;
    }
}

main(`Monday`); //1
main(`Tuesday`); //2
main(`Wednesday`); //3
main(`Thursday`); //4
main(`Friday`);  //5
main(`Saturday`);  //6
main(`Sunday`); //7
main(`Invalid`); //error

//Write a function that prints a number between 1 and 7 when a day of week is passed to it as a string and an error message if the string is not recognized.  
//The input comes as a single string argument
//The output should be returned as a result

//Function signature: function main(day)

