//Welcome to Module 3

//If you don't have Node installed, google Node JS and install

//console.log("Welcome to M3");

// let myCat = "Byron";
// let bYrOn = "myCat";
// let myDog = myCat;

// console.log(myCat,bYrOn,myDog);
// console.log("I'm a string with no identifier");

// let a = null;
// let b;
// console.log(a,b);

// let foo = 42;
// console.log(typeof foo);
// foo = "bar";
// console.log(typeof foo);
// foo = true;
// console.log(typeof foo);
// foo = {};
// console.log(typeof foo);
// foo = [];
// console.log(typeof foo);
// //foo is now a number
// // foo is now a string
// //foo is now a boolean


//Our friend, the Array!
// let cars = ["Ford","BMW","Peugeot"];
// let trucks = [];
// console.log(trucks.length);
// let arrayLength = cars.length; //3
// let secondCar = cars[1];  //BMW
// console.log(typeof cars); //object

// let someArray = [null, null, `Some String,`, `Single quote string`, `Backtick ${cars} string`];
// console.log(someArray.length);
// console.log(typeof someArray);

// // === equal in value and type

// 42 == "42"  // true "truthy"

// 42 === "42" /// false, 42 the number "42" the string are not equal in value and type

//
// let car = {type: "Infinity", model: "Spaceship", color: "blue" };
// //type is a label
// //console.log(car.type);

// let carType = car.type;
// let carType2 = car["type"];
// car.year = 2018;
// car.isSpaceShip = false;
// car["isRocket"] = true;
// console.log(car, car.length);

//console.log(5?4 : 10); // 4
////// condition(5) Ternary if true? (4)  :else if false?(10)
//console.log(5 > 6 ? 4 : 5 > 4 ? 44: 'False');

//Truthy Falsey statements are like if-else-if statements
// let rider = {
//     age: 18,
//     height: 100
// };
// let rider2 = {
//     age: 2,
//     height: 10
// };
// console.log((rider.age > 12 || rider2.height >= 48) ? "true can ride": "false no ride");
// //console.log(1 ? "true can ride" : "false no ride");

//Some Interesting Examples pg 25 (add the examples here)
//DATA TYPES
//console.log(typeof NaN);
//console.log(NaN === NaN);
//console.log(typeof null);


//A basic function
// function printStars(count){
//     console.log("*".repeat(count));
// }
// printStars(10);

//invoke function (call function) (execute function) (run function)

//DECLARING FUNCTIONS
//Function declaration
// function walk(){
//     console.log("walking");
// }
//walk("walking");

//Function expression
// let walk = function(){
//     console.log("walking");
// };
// walk("walking");

//Arrow function
// let walk = (dogName) => {
//     console.log("walking", dogName);
// };

// walk("Athena");

//PARAMETERS
//You can instantialized parameters with no value
// function foo(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c); //undefined
// }

// foo(1,2); //1,2 == [1,2, undefined]

// //unused parameters are ignored
// function foo(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// foo(1,2,3,6,7); // 1,2,3 == [1,2,3]

//FUNCTIONS CAN HAVE DEFAULT PARAMETER VALUES
// function printStars(count = 5){ //if there isn't an argument provided, use this : else use provided argument
//     console.log("*".repeat(count));
// }

// printStars();
// printStars(10);

//Function Overloading page 31
// function printName(firstName,lastName){ //expected args: [arg1,arg2]
//     let fullName = firstName;
//     if(lastName != undefined){ //if false code block no run
//         fullName += ` `+ lastName;
//     }
//     console.log(fullName);
// }

// printName("Zaphod"); //[arg1, undefined]
// printName("Zaphod", ["t", "h", "e"].join("")); //array of args. ["Zaphod", "the"]

//page 32 Arguments

//page 33 First-Class Functions

//page 34 Hoisting

// num = 6; // num = 6 === var num = 6
// console.log(num); // returns 6
// //var num

// console.log(`new num is `, num);

// function addNumbers(a,b){
//     return a + b;
// }

// console.log(addNumbers(2,2));

// let highScore = addNumbers(5,5);
// console.log(`Game over, the winner high school is ` + highScore);

// //Another example
// let walk = function(){
//     console.log(`walking`);
// };



// //Nested functions
// //Functions can be nested - hold other functions
// ///Inner functions have access to variable from their parent

// function hypotenuse(m,n){ // outer function
//     function square(num){
//         return num * num;
//     }
//     return Math.sqrt(square(m) + square(n));
// }
// let aAnswer = hypotenuse(3,4);
// console.log(aAnswer);
// //input: 3,4  //output: 5











