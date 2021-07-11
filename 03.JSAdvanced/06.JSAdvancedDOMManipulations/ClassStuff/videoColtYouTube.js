// function firstThing(){
//     return "First Thing";
// }

// function secondThing(){ //But I cannot return without line 1, call stack me back!
//     return firstThing() + "Second Thing!";
// }

// console.log(secondThing()); //I cannot return without line 5

//This runs (stacks the books) until the browser stops it hense Stack Overflow

//STack Calls
// function foo(x){
//     return x * x;
// }

// function bar(y){
//     return foo(y + 2); //The arguement cannot be passed in until the math is done
// }

// console.log(bar(8));


//Timer.js
//Google setInterval() Method
let intervalID = setInterval(
    function(){
        console.log("1 sec. passed");
    },
    1000
); // delay = 1000 ms = 1 sec

//remove (cancel) existing timer
clearInterval(intervalID); //stops the timer
