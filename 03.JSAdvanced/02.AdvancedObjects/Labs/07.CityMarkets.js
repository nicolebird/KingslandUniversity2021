function main(cityArray) {
    let arrowDelimiter = ' -> ';
    let colonDelimiter = ':';
    let finalCount = {};

    //for of loops have no index
    for (const cityInfo of cityArray) {
        //console.log(cityInfo);
        let [town, product, countNPrice] = cityInfo.split(arrowDelimiter);
        //this prints out the 3 elements into a row and splits them.
        let[soldCount, unitPrice] = countNPrice.split(colonDelimiter)
            .map(amount => Number(amount));
        //declares the count and price and finds the countNPrice then splits it while adding the colon then turns it into a number


        if (!finalCount[town]) {
            finalCount[town] = {};
        }

        if (!finalCount[town][product]) {
            finalCount[town][product] = 0;
        }
        //console.log(finalCount);

        finalCount[town][product] += soldCount * unitPrice;
    }

    let result = '';
    for (const town in finalCount) {
        result += `Town - ${town}\n`;
    //console.log(result);

        for (const product in finalCount[town]) {
            result += `$$$${product} : ${finalCount[town][product]}\n`;
        }
        //console.log(result);
    }
    console.log(result.trim());
}

main(["Sydney -> Laptops HP -> 200 : 2000", "Sydney -> Raspberry -> 200000 : 1500", "Sydney -> Audi Q7 -> 200 : 100000", "Montana -> Portokals -> 200000 : 1", "Montana -> Qgodas -> 20000 : 0.2", "Montana -> Chereshas -> 1000 : 0.3"]);
