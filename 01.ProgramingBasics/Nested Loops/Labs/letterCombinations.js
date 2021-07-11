function main(startLetter, endLetter, skipLetter){
    let count = 0;
    let startNumber = startLetter.charCodeAt(0);
    let endNumber = endLetter.charCodeAt(0);
    let skipNumber = skipLetter.charCodeAt(0);

    for(let n1 = startNumber; n1 <= endNumber; n1++){
        for(let n2 = startNumber; n2 <= endNumber; n2++){
            for(let n3 = startNumber; n3 <= endNumber; n3++){
                if(n1 != skipNumber && n2 != skipNumber && n3 != skipNumber){
                    console.log(String.fromCharCode(n1)+String.fromCharCode(n2)+String.fromCharCode(n3));
                    count++;
                }
            
            }
        }
    }
    console.log(count);

}

main("a", "c", "b");