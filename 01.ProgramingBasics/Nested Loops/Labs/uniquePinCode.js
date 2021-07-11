function main(max1, max2, max3){
    for(let i = 2; i <= max1; i+=2){
        for(let j = 2; j <= max2; j++){
            for(let k = 2; k <= max3; k+=2){
                if(j == 2 || j == 3 || j == 5 || j == 7){
                    console.log(`${i}${j}${k}`);
                } //2 3 5 7 
            }

        }

    }


}

main(3, 5, 5);