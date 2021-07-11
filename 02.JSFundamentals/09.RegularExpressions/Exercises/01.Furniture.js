function main(furniture) {
    let textArray = furniture;
    let regEx = />>.+<<((\d+.\d*)|(\d*.\d+))!\d+/g;
    let madeMatch = /[^'><!]+/g;
    let price = 0;
    console.log('Bought furniture:');
    //this console log covers the first output needed for the problem to be correct
    for(let i of textArray) {
        let result = i.match(regEx);
        if(result != null) {
            let array = result[0].match(madeMatch);
            price += Number(array[1]) * Number(array[2]);
            console.log(array[0]);
            
        }
    }
    
    console.log(`Total money spend: ${price.toFixed(2)}`);
}

main([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);
//Bought furniture: Sofa TV Total money spend: 2436.69
main([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);
// Bought furniture: Sofa TV Total money spend:2436.69
main(['>>Bicycle<!4', '>>Cabinet<<200!3', '>>Table<<150!9', '>Pen<2!2', '>>Lamp<<4!120']);
//Bought furniture: Cabinet Table Total money spent: 1950.00


//Write a function to calculate the total cost of different types of furniture.  You will be given some lines of input until you receive the line "Purchase".  For the lines to be valid it should be in the following format:  ">>{furniture name}<<{price}!{quantity}"

//The price can be floating point number or whole number.  Store the names of the furniture and the total price.  At the end print the each bought furniture on separate line in the format:  "Bought furniture: {1st name} {2nd name} ..."

//And on the last line print the following "Total money spend: {spend money}" formatted to the second decimal point.

//INPUT: >>Sofa<<312.23!3  >>TV<<300!5   >>Invalid<<!5  Purchase
//OUTPUT: Bought furniture: Sofa  TV  Total money spend: 2436.69

//COMMENT: Only the sofa and the TV are valid, for  each of them we multiply the price by the quantity and print the result.
