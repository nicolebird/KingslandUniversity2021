function main(lines) {
    lines=lines.map(Number);
    let result=[];
    let biggest = lines[0];
    for (let i = 0; i < lines.length; i++) {
        if(lines[i]>=biggest){
            result.push(lines[i]);
            biggest=lines[i];
        }
    }
    console.log(result.join('\n'));
}

  // Don't copy the calling of the function in judge, you won't get any points, just the code above
  console.log(main([1, 3, 8, 4, 10, 12, 3, 2, 24]));
  console.log(main([1, 2, 3, 4]));
  console.log(main([20, 3, 2, 15, 6, 1]));

//------------------ DECLARATIVE / IMPERATIVE APPROACH ------------------
// function main(input = []) {
//     let array = input.slice();
  
//     return array.reduce((acc, value) => {
//       if (acc.length === 0 || acc[acc.length - 1] <= value) {
//         acc.push(value);
//       }
//       return acc;
//     } ,[]).join('\n');
//   }
  
//   // Don't copy the calling of the function in judge, you won't get any points, just the code above
//   console.log(main([1, 3, 8, 4, 10, 12, 3, 2, 24]));
//   console.log(main([1, 2, 3, 4]));
  console.log(main([20, 3, 2, 15, 6, 1]));