function main(input){

    let junkVariable = input.shift();
    // '| Town | Latitude | Longitude |'
    
    let output = [];

    input.forEach(town =>{

        let vals = town.replace(/[|]\s?/g,'').trim();

        let [townName, lat, long] = vals.split(' ');

        let object = {
            Town: townName,
            Latitude: Number(Number(lat).toFixed(2)),
            Longitude: Number(Number(long).toFixed(2))
        };

        output.push(object);

    });

    output = JSON.stringify(output);

    console.log(output);

}

main([`| Town | Latitude| Longitude |`, `| Melbourne | -37.840935 | 144.946457 |`,`| Beijing | 39.913818 | 116.363625 |`]);  //[{"Town":"Melbourne","Latitude":-37.840935,"Longitude":144.946457},{"Town":"Beijimg","Latitude":39.913818,"Longitude":116.363625}]

//You're tasked to create and print a JSON from a text table.  You will receive input as an array
