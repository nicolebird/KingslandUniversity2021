function main(parameters) {
    let stat = new Map();

    for (let row of parameters) {
        let [town, product, price] = row.split('|').map(e => e.trim());

        if (!stat.get(product)) {
            stat.set(product, new Map());
        }

        stat.get(product).set(town, Number(price));
    }

    let result = '';

    for (let kvp of stat) {
        let lowestPrice = [...kvp[1]].sort((a, b) => a[1] - b[1])[0];
        result += `${kvp[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`;
    }

    console.log(result.trim());
}

main(["Sample Town | Sample Product | 1000", "Sample Town | Orange | 2", "Sample Town | Peach | 1", "Sydney | Orange | 3", "Sydney | Peach | 2", "New York | Sample Product | 1000.1", "New York | Burger | 10"]);
//Output:
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
