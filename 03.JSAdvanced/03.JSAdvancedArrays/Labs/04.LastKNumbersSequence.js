//Works in VS code but not the HW grader
function main(array) {
    array = array.map(Number);

    let count = array.shift();
    console.log(array.slice(0, count).join(" "));
    console.log(array.slice(array.length-count, array.length).join(" "));
}

main([6,3]);  //3 3

//------------------ IMPERATIVE / DECLARATIVE APPROACH ------------------
function main(n, k) {
    n = +n;
    k = +k;
  
    let sequence = new Array(n);
    sequence[0] = 1;
  
    for (let i = 1; i < sequence.length; i++) {
      let start = i - k < 0 ? 0 : i - k;
      sequence[i] = sequence.slice(start, k + start).reduce((acc, value) => acc + value, 0);
    }
  
    //return sequence.join(' ');
    console.log(sequence.join(` `));
  }
  
  // Don't copy the calling of the function in judge, you won't get any points, just the code above
  console.log(main(6, 3));
  console.log(main(8, 2));