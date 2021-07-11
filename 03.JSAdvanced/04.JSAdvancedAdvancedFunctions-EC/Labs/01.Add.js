function main(num) {
  return function addNext(nextNum) {
    return num + nextNum;
  };
}

// Don't copy the code below in the homeworkgrader, you won't get any points, just the code above
let add5 = main(5);
console.log(add5(2));
console.log(add5(3));

let add7 = main(7);
console.log(add7(2));
console.log(add7(3));

