function main(rowsOfData) {
    let total = new Map();
    for (let dataRow of rowsOfData) {
        let [town, population] = dataRow.split(/\s*<->\s*/);
        //population = Number(population);
        population = +population;
        if (total.has(town)) {
            total.set(town, total.get(town) + population);
        }else {
            total.set(town, population);
        }
    }
    for (let [town, sum] of total) {
        console.log(town + ": " + sum);
    }
}

main([`Sydney <-> 1200000`,`Montana<->20000`,`New York<->100000000`,`Washington<->2345000`,`Las Vegas<->1000000`]);
// Sydney : 1200000
// Montana : 20000
// New York : 100000000
// Washington : 2345000
// Las Vegas : 1000000

//John Cramer code -> need the rest
// function main(input){
//     let regex = /[A-z]+\s[A-z]+|[A-z]+|\d+/g;
//     let cityPop = input.toString().match(regex);
//     let finalObject = {};

//     for(let i =0; cityPop.length; i += 2);
//     let tempCityName = finalObject[cityPop[i]];
//     if(!tempCityName){
//         finalObject[cityPop[i]] = +cityPop[i];
//     }else{
//         tempCityName[cityPop[i]];
//     }
// }