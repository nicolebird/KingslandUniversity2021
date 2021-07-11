function main(array, order) {
  let numberArray = array;
  let sortDirection = order;
  if (sortDirection == 'asc') {
      console.log(numberArray.sort(function(a, b) {
          return a - b;
      }));
  } else {
      console.log(numberArray.sort(function(a, b) {
          return b - a;
      }));
  }
}
  
  // Don't copy the code below in the HW Grader, you won't get any points, just the code above
  console.log(main([14, 7, 17, 6, 8], 'ascending'));
  console.log(main([14, 7, 17, 6, 8], 'descending'));
  