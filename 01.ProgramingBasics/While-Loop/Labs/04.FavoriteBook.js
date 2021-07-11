//SHORTER WAY TO DO THIS CODE

function main(correctBook, bookList){
    while(true){
        let currentBook = bookList.shift();
        if (currentBook != correctBook && currentBook != undefined){
            console.log(`Invalid book; ${currentBook}`);
            currentBook = bookList.shift();

        }
        if(currentBook == correctBook){
            console.log("Book found!");
        }
    }
}

//MORE STR8 FORWARD CODE FOR THIS PROBLEM
// function main(correctBook, bookList){
//     while(true){
//         let currentBook = bookList.shift();
    
//         if(currentBook == undefined){
//                 break;
//         }else if(currentBook == correctBook){
//             console.log("Book found!");
//             break;
//         }else{
//             console.log(`Invalid Book: ${currentBook}`);
//         }
    
//     }
// }



main(`Alice in Wonderland`, [ `Winnie the Pooh`,`Alice in Wonderland`]);