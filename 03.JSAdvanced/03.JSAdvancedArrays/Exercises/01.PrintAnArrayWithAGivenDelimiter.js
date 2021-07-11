function main(input = []) {
    let array = input.slice();
    let delimiter = array.pop();
  
    //return array.join(delimiter);
    console.log(array.join(delimiter));
  }
  
  // Don't copy the calling of the function in the HW Grader, it will fail if you do, just the code above
  console.log(main(['One', 'Two', 'Three', 'Four', 'Five', '-']));
  console.log(main(['How about no?', 'I','will', 'not', 'do', 'it!', '_']));