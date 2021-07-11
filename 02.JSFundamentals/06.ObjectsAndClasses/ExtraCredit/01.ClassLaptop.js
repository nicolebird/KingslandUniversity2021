//Create a class Laptop that has the following properties:
//Info - object that contains:  
//PRODUCER - string  AGE - number  BRAND - string
//isOn - boolean (false by default)
//turnOne - functionthat sets the isOn variable to true
//turnOff - function that sets the isOn variable to false
//showInfo - function that returns the producer, age and brand as JSON
//quality - number(every time the laptop is turned on/off the quality decreases by 1)
//getter price - number(800 - {age * 2} + (quality * 0.5))
//The constructor should receive the info as an object and the quality

//INPUT: let info = {producer: "Dell", age: 2, brand: "XPS"}
//       let lapTop = new Laptop(info, 10)
//       laptop.turnOn()
//       console.log(laptop.showInfo())
//       laptop.turnOff()
//       console.log(laptop.quality)
//       laptop turnOn()
//       console.log(laptop.isOn)
//       console.log(laptop.price)

//OUTPUT:  {"producer":"Dell", "age": 2, "brand": "XPS"} 8  true  799.5