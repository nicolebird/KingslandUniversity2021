let array = [1,2,3,4,5];

let lastItem = array.pop();
//if you don't assign it to something then you will basically throw the last item away.
//.pop()  takes no input because it is implied that it takes off the last item in the array.

console.log(lastItem); //5
console.log(array); //[1,2,3,4];