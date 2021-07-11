function countUpTo10(number){
    console.log(number);

    number++;
    if(number <=10){
        countUpTo10(number);
    }
}

countUpTo10(0);