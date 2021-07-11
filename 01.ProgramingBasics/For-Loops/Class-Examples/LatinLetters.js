function latinLetters(startChar, endChar){
    let startValue = startChar.charCodeAt(0);
    let endValue = endChar.charCodeAt(0);
    let result = ``;
    for(let i = startValue; i <= endValue; i++){
        result += String.fromCharCode(i) + ``;
    }
    console.log(result);
}

latinLetters(`a`, `c`);
// latinLetters(`f`, `q`);



// function main(firstLetter, secondLetter){
//     let startValue = firstLetter.charCodeAt(0);
//     let endValue = secondLetter.charCodeAt(0);
//     let result = ``;

//     for (let i = startValue; i <= endValue; i++){
//         result += String.fromCharCodeAt(i) + ``;
//     }
//     console.log(result.trim());
// }

// main(`a `, `c `);