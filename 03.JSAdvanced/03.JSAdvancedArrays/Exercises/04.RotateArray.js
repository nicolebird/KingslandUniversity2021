function main(input) {
    let rotations = Number(input.pop());
    rotations %= input.length;

    for(let i=0; i<rotations; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

main(['1',  '2',  '3',  '4',  '2']); //3 4 1 2

//----------------

//------------------ IMPERATIVE APPROACH ------------------
// function main(input = []) {
//     let array = input.slice();
//     let rotations = +array.pop();
  
//     for (let i = 0; i < rotations % array.length; i++) {
//       array.unshift(array.pop());
//     }
  
//     //return array.join(' ');
//     console.log(array.join(` `));
//   }
  
//   // Don't copy the calling of the function in judge, you won't get any points, just the code above
//   console.log(main(['1', '2', '3', '4', '2']));
//   console.log(main(['Banana', 'Orange', 'Coconut', 'Apple', '15']));