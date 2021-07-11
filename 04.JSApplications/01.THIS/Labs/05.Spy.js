//Write a fx that takes 2 parameters target(an obj) and method(a string) and tracks how many times the method of an object is called.
//Input•target: an object containing the method  •method: a string with the name of the methd on target to spy on 
//Output: The output should be returned as an obj w/ property count, which holds how many times the provided method is invoked.
function main() {
    return Spy;
}
//This is just to get the HW grader gods to accept the fx.  

function Spy(target, method) {

    const originalFx = target[method]; /// fx is a method
    //use an obj so we can pass by reference, not value
    //i.e. we can return result, but update count from this scope. 
    let result = {
        count: 0
    };
    //replace method with spy method
    target[method] = function() {
        result.count++; //track fx was called
        return originalFx.apply(this, arguments); //invoke original fx
    };

    return result;
}

//EXAMPLE EXECUTION #1
// let spy = main()(console, "log");
// console.log(spy); //{count:1 }
// console.log(spy); //{count:2}
// console.log(spy); //{count:3}

//EXAMPLE EXECUTION #2
let obj = {
    method:() => "invoked"
};
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy); //{count: 3}