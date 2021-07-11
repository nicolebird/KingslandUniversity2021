function main(city, area, population, country, postCode) {

    let town = {
        name: city,
        area,
        population,
        country,
        postCode,
    };

    let entries = Object.entries(town);

    for(let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
main("Atlanta", "343", "416474", "USA", "404");