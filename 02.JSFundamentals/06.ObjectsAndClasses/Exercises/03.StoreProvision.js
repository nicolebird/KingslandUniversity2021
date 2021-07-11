//You will receive two arrays.  The first array represents a current stock of the local store.  The second array will contain productions which the store has ordered for DELIVERY.

//The following information applies to both arrays:  Every EVEN index will hold the NAME of the PRODUCT and on every ODD index will hold the QUATITY of the PRODUCT.  Thhe second array could contain products that are ALREADY IN the local store.  If that happens INCREASE the QUANTITY for the given product.  You should store then into an OBJECT, and print them in the following format:  (product -> quantity).

//All of the arrays values will be strings.

function main(stockList, deliveryList) {
    let productList = [],
        itemQuality = 0,
        duplicatePlace = 0;
    class Food {
        constructor(name, quality) {
            this.name = name;
            this.qty = quality;
            //qty is quality as an abbreviation
        }
    }
    //go through stock list
    for (let i = 0; i < stockList.length; i++) {
        if (i % 2 == 0) {
            //get index of duplicate item or -1 if the index does not exit.
            duplicatePlace = getIndex(stockList[i], deliveryList);
            if (duplicatePlace == - 1) {
                //add time to food object
                let localFood = new Food(stockList[i], Number(stockList[i + 1]));
                //add object to productlist
                productList.push(localFood);
            } else {
                //if item exits add quantities.
                itemQuality = Number(stockList[i + 1]) + Number(deliveryList[duplicatePlace + 1]);
                let localFood = new Food(stockList[i], itemQuality);
                productList.push(localFood);
                //remove item from
                deliveryList.splice(duplicatePlace, 2);
            }
        }
    }
    for (let i = 0; i < deliveryList.length; i++) {
        if (i % 2 == 0) {
            let localFood = new Food(deliveryList[i], Number(deliveryList[i + 1]));
            productList.push(localFood);
        }
    }
    productList.forEach(element => console.log(`${element.name} -> ${element.qty}`));
}
function getIndex(searchNum, numArr) {
    
    for (let i = 0; i < numArr.length; i++) {
        if (searchNum === numArr[i]) {
            return i;
        }
    }
    return -1;
}
main(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2' ],['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);
//Chips -> 5  CocaCola -> 9  Bananas -> 14  Pasta -> 4  Beer -> 2  Flour -> 44  Oil -> 12  Pasta -> 7  Tomatoes -> 70  Bananas -> 30

