function main(array){
    console.log(array.filter((num,index) => index % 2 == 0).join(' '));
}


main(['20', '30', '40']); //20 40
main([`5`,`10`]); //5

//Another way

function main(arr){
    let finalArr = [];
    for(let x = 0; x < arr.length; x++){
        if(x % 2 == 0){
            finalArr.push(arr[x]);
        }
    }
    console.log(finalArr.join(" "));
}

main(['20', '30', '40']); //20 40
main([`5`,`10`]); //5