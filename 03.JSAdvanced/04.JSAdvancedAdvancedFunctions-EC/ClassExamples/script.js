//Welcome to Advanced Functions!
//Function are pieces of code that do things and return something (a value, true, false, some html, etc etc ...)

// function greetClass(studentName){ 
    //studentName is the parameter when you write a function, a placeholder
//     console.log(`Hello ${studentName}`);
// }

// let moreOfAParameter = `Chadd`;
// greetClass(moreOfAParameter);  
//Chadd is the argument when the function is called

//FIRST-CLASS FX
// function sayHello() {
//     return "Hello, ";
// }

// function greeting(helloMessage, name) {
//   console.log("Hello message is ", helloMessage);
//   console.log("Invoked hello message is ", helloMessage(), " which is the return value of a function, functions return a value");
//     return helloMessage() + name;
// }
// console.log(greeting (sayHello, "JavaScript!"));
// // Hello, JavaScript!

// function sayHello() {
// //let sayHello = function(){ //** my variable is now a function */
//     return "Hello, ";
// }

// function sayGoodbye() {
//    return "Goodbye, ";
// }

// function greeting(helloMessage, name) {
//     return helloMessage() + name;
// }
// console.log(

//   greeting(sayHello, "JavaScript!"), greeting(sayGoodbye, "Cobal")

//   );
// // Hello, JavaScript!
// //console.log(greeting);

// const sayHello = function(){
//     return function(){
//         console.log("Hello!");
//         //console is a object and log is a method 
//     };
// };

// const myFunc = sayHello();
// myFunc(); //Hello!

// IIFE : Could we say IIFE is creating the function, putting in input, and receiving a result all in one command?

// let result =(function (){
//     let name = "Peter";
//     return name;
// })();

// //Immediately creates the output/result
// console.log(result); //Peter

//Classes are object factories

// {  <---parent box
//     //above and below is the closure
//     { <--- child box within the parent box
//         //can access anything inside the parent brackets
//     }
// }

