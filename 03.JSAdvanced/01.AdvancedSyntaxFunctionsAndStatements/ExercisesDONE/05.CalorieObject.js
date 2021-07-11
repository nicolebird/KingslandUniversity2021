//Write a function that composes an object by given properties.  The input comes as an array of strings.  Every even index of the array represents the name of the food.  Every odd index is a number that is equal to the calories in 100 grams of the given product.  Assign each value to its corresponding property and print it on the console.

//The input comes as an array of string elements.

//The output shoud be printed on the console.

//Input: [`Yoghurt`,48,`Rice`,138,`Apple`,52]
//Output: [{ Yoghurt: 48, Rice: 138, Apple: 52}]
//Input: [`Potato`, 93,`Skyr`,63,`Cucumber`,18,`Milk`, 42]
//Output: {Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42}

function solve(array) {
    let obj = new Object();
  
    for (let i = 0; i < array.length; i+=2) {
      let key = array[i];
      let value = +array[i + 1];
  
      obj[key] = value;
    }
  
    console.log(obj);
  }
  
  // Don't copy the calling of the function in judge, you won't get any points, just the code above
  solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
  solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);