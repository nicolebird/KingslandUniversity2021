function main(array) {
    array = array.map(Number);

    console.log(array.sort((a, b) => a - b).slice(0, 2).join(" "));
}

main([30, 15, 50, 5]);  // 5 15

//------------------ DECLARATIVE APPROACH ------------------
function main(numbers = []) {
    return numbers.slice()
                  .sort((a, b) => a - b)
                  .slice(0, 2)
                  .join(' ');
  }
  
  // Don't copy the calling of the function in the HW Grader, you won't get any points, just the code above
  console.log(main([30, 15, 50, 5]));
  console.log(main([3, 0, 10, 4, 7, 3]));