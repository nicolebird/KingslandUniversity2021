//Create an object, which will hold area, population, country and postal code.
//Loop through all the keys and print them with their values

//INPUT: Atlanta 347 420003 USA  30060
//OUTPUT: name -> Atlanta  area -> 347  population -> 420003  country -> USA  postCode -> 30060

function main(cityName,areaCode,population,country,zipCode){
    let city = {
        name: cityName,
        area: areaCode,
        population,
        //if the variable names are the same this is acceptable.
        country,
        postalCode: zipCode,
    };
    
    let cityArray = Object.defineProperties(city);

    for(let [key, value] of cityArray){
        console.log(`${key} -> ${value}`);
    }
}
main(`Atlanta`, 347, 420003, `USA`,30060);


