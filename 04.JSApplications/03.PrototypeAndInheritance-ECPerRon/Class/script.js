// class Foo {
//     constructor(who){
//         this.who = who;
//     }
//     identify(){
//         //return "I am" + this.me; <- typo in the slides
//         return "I am" + this.who;
//     }
// }


// class Bar extends Foo {
//     constructor(who){
//         super(who);
//     }
//     speak(){
//         return "Hello, " + this.identify() + ".";
//         //console.log("Hello," + this.identify() + "."); <- throws undefine. 
//     }
// }
// //this doesn't console log because it doesn't invoke anything at this point. 
// let amFoo = new Foo("Me");
// console.log(amFoo);
// console.log(amFoo.identify());

// let amBar = new Bar("You");
// console.log(amBar);
// console.log(amBar.speak());

//-----------------------------------------

//Prototype Inheritance

// function Foo(who){
//     this.me = who;
// }

// Foo.prototype.identify = function(){
//     return "I am" + this.me;
// };

// function Bar(who){
//     Foo.call(this, who);
// }

// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//     console.log("Hello," + this.identify() + ".");
// };

// let b1 = new Bar("b1");
// let b2 = new Bar("b2");
// b1.speak(); 
// b2.speak();

//--------------
//JS Obj

//Literals
//This has to be made each time it is needed
// let bar={
//     me: "I am b1",
//     speak: function(){
//         console.log("Hello,"+ this.me +".");
//     }
// };

//Constructed
//This can be made once and invoke it for everything else.  
// function Bar(name){
//     this.me = "I am" + name;
//     this.speak = function(){
//         console.log("Hello," + this.me + ".");
//     };

// }

// let b1 = new Bar("b1");

//----------------------
//Prototype <- EX given by Ron
// function doSomething(){}
// console.log( doSomething.prototype );
// //  It does not matter how you declare the function, a
// //  function in JavaScript will always have a default
// //  prototype property.
// //  (Ps: There is one exception that arrow function doesn't have a default prototype property)
// var doSomething = function(){};
// console.log( doSomething.prototype );

// function doSomething(){}
// doSomething.prototype.foo = "bar";
// console.log( doSomething.prototype );

//--------------------
//Prototype Chain - Simple Example

// function Foo(y){
//     this.y = y;
// }

// Foo.prototype.x = 10;
// Foo.prototype.calculate = function (z){
//     return this.x + this.y + z;
// };


// let b = new Foo(20);

//------------------







