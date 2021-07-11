//SAME PROBLEM WITH A WHILE LOOP SOLUTION
function main(height){
    let row = 1;

    while(row <= height){
        let stars = ``;
        // let stars = ``;
        let col = 0;
        while(col++ < row)
            stars +=`*`;
            //row = row + `*`;
        console.log(stars);
        row++;
    }
}
main(5);

//FOR LOOP SOLUTION
// function main(size){
//     for(let height = 1; height <= size; height++){
//         let row = ``;
//         // let stars = ``;
//         for(let col =1; col <= height; col++){
//             row +=`*`;
//             //row = row + `*`;
//         }
//         console.log(row);
//     }
// }


// main(5);

