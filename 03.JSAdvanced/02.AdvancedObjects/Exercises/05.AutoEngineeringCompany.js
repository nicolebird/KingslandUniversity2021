function main(input) {
    let cars = new Map();

    for(let line of input){
        let tokens = line.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let count = Number(tokens[2]);

        if(! cars.get(brand)){
            cars.set(brand, new Map());
        }
        if(! cars.get(brand).get(model)){
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + count);
    }

    for(let [brand, modelCount] of cars){
        console.log(brand);

        for(let [model, count] of modelCount){
            console.log(`###${model} -> ${count}`);
        }
    }
}

main(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10"]);

//Audi ###Q7 -> 1000 ###Q6 -> 100 BMW ###X5 -> 1000 ###X6 -> 100 Citroen ###C4 -> 145 ###C5 -> 10 Volga ###GAZ-24 -> 1000000 Lada ###Niva -> 1000000 ###Jigula -> 1000000

main(["Lamborghini | Aventador | 300", "Tesla | Model S | 2000", "Tesla | Roadster | 1234", "Jaguar | F-TYPE | 700", "Porsche | 918 Spyder | 300", "Porsche | Carrera GT | 2000", "Jaguar | XF | 450", "Tesla | Roadster | 568"]);

//Lamborghini ###Aventador -> 300 Tesla ###Model S -> 2000 ###Roadster -> 1802 Jaguar ###F-TYPE -> 700 ###XF -> 450 Porsche ###918 Spyder -> 300 ###Carrera GT -> 2000
