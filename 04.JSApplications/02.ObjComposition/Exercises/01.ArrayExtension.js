//Has to have the function main on first line of this code for the code to run properly without errors. 
//-------------------------------------- PDF below and throughout the code
//Extend the build-in Array obj w/ additional functionality.  Implement the following functionality: (added to each element in the written problem)
//INPUT/OUTPUT: Input for fxs that expect it will be passed as valid parameters.  Output from fxs should be their return value. 
//CONSTRAINTS: Structure your code as a IIFE (Immediately Invoked Fx Expression)
function main(){
    (() => {
        //should not use other array methods it may cause side effects
        //last() - returns the last element of the array
        //Opt 1: Array.prototype.last = function(){
        Array.prototype.last = () => {
            return this[this.length - 1];
        };
        //skip(n) - returns a new array which includes all original elements, except the first n element; n is a Number parameter
        Array.prototype.skip = function (n){
        //Opt2: Array.prototype.skip = () => {
            return this.slice(n);
        };
        //take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter 
        Array.prototype.take = function (n){
        //Opt2: Array.prototype.take = () => {
            return this.slice(0,n);
        };
        //sum() - returns a sum of all array elements
        Array.prototype.sum = function (){
        //Opt2: Array.prototype.sum = () => {
            return this.reduce((a,b) => a + b, 0);
        };
        //average() - returns the average of all array elements
        Array.prototype.average = function(){
        //Opt2: Array.prototype.average = () => {
            return this.sum() / this.length;
        };
    })();
}
main(); 
let myArr = new Array(1,2,3); 
console.log(myArr.skip(1)); 
console.log(myArr.take(3)); 
console.log(myArr.sum()); 
console.log(myArr.average());