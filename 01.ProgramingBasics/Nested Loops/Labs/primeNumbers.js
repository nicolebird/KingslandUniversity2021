function main(lowerNum, higherNum){

    for(let i = lowerNum; i <= higherNum; i++){
        isPrime = true;
        for(let j = 2; j < i;j++ ){
            // j is divided by
            //start counting by 2
            if(i % j == 0){
                isPrime = false;
                break; //switch for while
            }
        }
        if(isPrime){
            console.log(i);
        }
    }

}
main(5, 50);

//submitted and passed in HW grader. 