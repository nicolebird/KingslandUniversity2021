//page 9 of the THIS slides. Topic 1: This
//"This" refers to the Global Object
//When used alone, the owner is the object [global]
// console.log(this === global); //false

// function solve() {
//     return this;
// }

// console.log(solve() === global); //true
//---------------------------------------------------

// console.log("This is", this);

// let b = "b"; //let is local
// var a = "a"; //var is global
// const c = "c"; //const is constant
// console.log(this.b, this.a, this.c);

// function foo(){
//     console.log("Simple function call");
//     console.log(this === window); //true
// }

// foo();
//----------------------------------

//"This" in a Method pg 13 of slides
///Refers to the owner of the method
// let person = {
//     firstName : "Istvan",
//     lastName : "Kova",
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     },
//     whatIsThis : function(){
//         return this;
//     }
// };
// let that = this;

// let tree = {
//     treeName: "Oak",
//     treeTalk: function(){
//         return this;  // {treeName: "Oak, treeTalk: function() {//... }"}
//     }
// };

// //Outside the person obj

// console.log("This is outside of the person object", this); //this scope is the Window object
// console.log(person.fullName()); //Peter Istvan
// console.log(person.whatIsThis());  //person (this is scope dependent)

//----------------------------------------------------------------
//"This" refers to the Parent Obj

// function foo(){
//     console.log("This inside of foo", this);
//     console.log(this === global);
//     console.log(false === false);
// }
// //console.log("Global is", global);

// let user = {
//     count: 10,
//     foo: foo, // this was called here, thus user is the obj
//     bar: function(){ console.log(this === global); }

// };

// user.foo(); //false
// foo();
// let func = user.bar;
// func(); //true
// user.bar(); //false

//-----------------------------------
//In Events - In event handlers, this is set to the element the event fired from
// let mainElement = document.getElementById('main');
// mainElement.addEventListener("click", function(e){
//     console.log(this===event.currentTarget); // always true
//     //console.log("The event 'this happened on was", this);
// });
//------------------------------------------------------------

//"This" in Classes - The value of this refers to the newly created instance

// class Person { // class is the obj factory

//     constructor(fn,ln){
//         this.first_name = fn;
//         this.last_name = ln;
//         this.displayName = function(){
//             console.log(`Name: ${this.first_name} ${this.last_name}`);
//         };
//     }
// }
// let person = new Person("John","Doe");
// console.log("My new person object from the Person object factory (class) is", person);
// let newPerson = new Person("Data", "Jones");
// person.displayName(); //John Doe
// newPerson.display(); //Data Jones

//---------------------------------------------------
//"This" with Inner Functions - this variable is accessible only by the function itself

// function outer(){
//     console.log(this); //Obj {name: "Peter"}

//     function inner(){
//         console.log(this); //Window
//     }
//     inner();
// }
// const obj = { name: "Peter", func: outer };
// obj.func();

//--------------------------------------------------------
//"This" with Arrow Fx - this retains the value of the enclosing lexical context
//Slide 19

// function outer(){
//     const inner = () => console.log(this);
//     inner();
// }

// function reg(){
//     function notArrow(){
//         console.log(this);
//     }
//     notArrow();
// }
// const obj = {
//     name: "Peter",
//     func: outer,
//     notA: reg
// };
// obj.func(); // Obj {name: "Peter"}
// obj.notA(); //Window Obj

//-----------------------------------------------------------

//pg 21 Explicit Binding - Occurs when call(), apply(), or bind() are used on a function
//// -- Forces a function call to use a particular obj for this binding

// function greet(){
//     console.log(this.name);
// }
// let person = { name: `Alex`};
// greet.call(person, arg1,arg2,arg3,...); //Alex

//----------------------------------------------------------
//Changing the Context: Call - Calls a fx w/ a given this value and args provided individually
// const sharePersonalInfo = function (...activities) {
//     console.log(this);
//     let info = `Hello, my name is ${this.name} and `+ 
//     `I'm a ${this.profession}.\n`;
//     info += activities.reduce((acc, curr) => {
//         let el  = `--- ${curr}\n`;
//         return acc + el;
//     }, "My hobbies are:\n").trim();
//     return info;
//   };
  
//   const firstPerson = { name: "Peter", profession: "Fisherman" };
//   const secondPerson = { name: "Data", profession: "Star Traveler" };
//   console.log(sharePersonalInfo.call(firstPerson, 'biking',
//   'swimming','football'));
//   console.log(sharePersonalInfo.call(secondPerson, 'AI',
//   'cats','Saving Humans'));
//   // Hello, my name is Peter.
//   // I'm a Fisherman.
//   // My hobbies are:
//   // --- biking
//   // --- swimming
//   // --- football

  ////Apply example
//   const firstPerson = {
//       name: "Peter",
//       prof: "Fisherman",
//       shareInfo: function(){
//           console.log(`${this.name} works as a ${this.prof}`);
//       }
//   };
//   const secondPerson = { name: "George", prof: "Manager"};
//   firstPerson.shareInfo.apply(secondPerson); //George works as a manager

//---------------------------------
//Bind Example - this creates a new fx
const x = 42;
const getX = function(){
    return this.x;
};
const module = { x , getX };
const unboundGetX = module.getX;
console.log(unboundGetX()); //undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
console.log("bounded means a function now", getX);