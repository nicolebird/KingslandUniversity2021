//You will receive a number, check if it is amazing
//An amazing number, which sum of digits equal to 9
//Print it in formatt "{number} Amazing? {Tur or Falso}"

function main(n){
    let stringNum = n.toString(); // 999 "999"

    let sum = 0;
    for(let i=0; i < stringNum.length; i++){
        sum += Number(stringNum[i]); // stringNum[0] => "9"
    }

    if (sum === 9){
        console.log("Amazing");
    }else{
        console.log("Not amazing!");
    }
}

main(999);
main(1233);