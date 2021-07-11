function main(array) {
    array = array.map(Number);

    console.log(array.filter((number, index) => index % 2 == 1).map(num => num * 2).reverse().join(" "));
}

main([10, 15, 20, 25]); // 50 30


//------------------ IMPERATIVE APPROACH ------------------
// function main(numbers = []) {
//     let result = [];
//     for (let i = 1; i < numbers.length; i += 2) {
//       result.push(+numbers[i] * 2);
//     }
  
//     return result.reverse().join(' ');
//   }
  
//   // Don't copy the calling of the function in judge, you won't get any points, just the code above
//   console.log(main(['10', '15', '20', '25']));
//   console.log(main(['3', '0', '10', '4', '7', '3']));
  
  //------------------ DECLARATIVE APPROACH ------------------ I ----
  /*
    function solve(numbers = []) {
      return numbers.filter((_, idx) => idx % 2 !== 0).map(x => +x * 2).reverse().join(' ');
    }
    
    // Don't copy the calling of the function in judge, you won't get any points, just the code above
    console.log(solve(['10', '15', '20', '25']));
    console.log(solve(['3', '0', '10', '4', '7', '3']));
  */