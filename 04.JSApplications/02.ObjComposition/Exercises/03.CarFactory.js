//Pleases the HW Gods lol
//Write a program that assembles a car by given requirements out of existing components.  The client will place an order in the form of an obj describing the car.  You need to determine which parts to use to fulfill the client's order.  You have the following parts in storage: 

//An engine has power(given in horsepower) and volume(given in cubic centimeters).  Both of these values are numbers.  When selecting an engine, pick the smallest possible that still meets the requirements. 
//  Small engine: {power: 90, volume: 1800}, Normal engine: {power: 120, volume: 2400}, Monster engine: {power: 200, volume: 3500}

//The carriage has a type and color.  Both of these values are strings.  You have two types of carriages in storage and can paint it any color.
//Hatchback: { type: `hatchback`, color: <as required>}, Coupe: { type: `coupe`, color: <as required>}

//The wheels will be represented by an array of 4 numbers, each number represents the diamete of the wheel in inches.  The size can only be an odd number.  Round down any requirements you receive to the nearest odd number. 

//INPUT: you will receive an obj as an arg to your fx.  The format will be as follows: { model: <model name>, power: <minimum power>, color: <color>, carriage: <carriage type>, wheelsize: <size>}

function main (carObj){
    const engines = [
        {power: 90, volume: 1800}, //small engine
        {power: 120, volume: 2400}, //normal engine
        {power: 200, volume: 3500}, //monster engine
    ];

    return {
        //this carObj.model runs through available options and returns the correct model
        model: carObj.model,
        //This engine.find searches through options by power options verses what the buyer is wanting
        engine: engines.find(x => carObj.power <= x.power),
        //This carObj.carriage browses through available options
        //This carObj.color browses through available color options
        carriage: { type: carObj.carriage, color: carObj.color},
        //This terinary fills the wheels order according to what is on hand and what is being asked for
        //Returns the this object after filling the section identified by start and end with value
        wheels: Array(4).fill(carObj.wheelsize % 2 === 0 ? carObj.wheelsize - 1 : carObj.wheelsize),
    };
}

console.log(main({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));

console.log(main({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }));
