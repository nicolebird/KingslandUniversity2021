function main(input) {
    let heroes = [];

    for(let line of input) {
        let tokens = line.split(/\s*\/\s*/);
        //The \s metacharacter is used to find a whitespace character. A whitespace character can be: A space character. A tab character. A carriage return character
        let name = tokens[0];
        let level = Number(tokens[1]);
        //the Number turns the tokens into a number
        let items = [];
        //let the items be an array

        if(tokens.length > 2) {
            items = tokens[2].split(", ");
        }

        let hero = {name: name, level: level, items: items};
        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

main(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
//[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
main(['Jake / 1000 / Gauss, HolidayGrenade']);
//[{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]