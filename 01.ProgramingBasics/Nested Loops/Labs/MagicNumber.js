function main(magicNum){

    for(let firstNum = 1; firstNum <= magicNum; firstNum++){
        for(let secondNum = 1; secondNum <= magicNum; secondNum++){
            for(let thirdNum = 1; thirdNum <= magicNum; thirdNum++)
            /// 1 1 1
            // 1 1 2
            // 1 1 3
            if((firstNum * secondNum * thirdNum)=== magicNum){
                console.log(`${firstNum}${secondNum}${thirdNum}`);
            }
        }
    }
    //no numbers here
}


//main(1);
//main(3);
//main(6);
main(8);

//correct and submitted