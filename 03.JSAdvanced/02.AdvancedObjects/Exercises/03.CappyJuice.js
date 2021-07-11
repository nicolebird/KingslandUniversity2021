function main(input = []) {
  const bottles = new Map();
 
  input.reduce((account, value) => {
    let [juice, quantity] = value.split(" => ");
    quantity = +quantity;
 
    if(!account.hasOwnProperty(juice)) {
        account[juice] = 0;
    }  
    account[juice] += quantity;
 
    if (account[juice] >= 1000) {
      if (!bottles.has(juice)) {
        bottles.set(juice, 0);
      }
 
    bottles.set(juice, bottles.get(juice) + parseInt(account[juice] / 1000));
      account[juice] %= 1000;
    }
 
    return account;
  }, {});
 
  let output = '';
  for(let[juice, quantity] of bottles) {
    output += `${juice} => ${quantity}\n`;
  }

  console.log(output.trim());
}

// Don't copy the calling of the function in judge, you won't get any points, just the code above
console.log(main(['Orange => 2000',
                   'Peach => 1432',
                   'Banana => 450',
                   'Peach => 600',
                   'Strawberry => 549']));

console.log(main(['Kiwi => 234',
                   'Pear => 2345',
                   'Watermelon => 3456',
                   'Kiwi => 4567',
                   'Pear => 5678',
                   'Watermelon => 6789']));


// You will be given different juices, as strings. You will also receive quantity as a number. If you receive a juice, you already have, you must sum the current quantity of that juice, with the given one. When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end.

// Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as much bottles as you can, and store what is left from the juice.

// Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.

// Input
// The input comes as array of strings. Each element holds data about a juice and quantity in the following format:

// “{juiceName} => {juiceQuantity}”

 

// Output
// The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.

 

// Examples
// Input

// Output

// ['Orange => 2000',

// 'Peach => 1432',

// 'Banana => 450',

// 'Peach => 600',

// 'Strawberry => 549']

// Orange => 2

// Peach => 2

// ['Kiwi => 234',

// 'Pear => 2345',

// 'Watermelon => 3456',

// 'Kiwi => 4567',

// 'Pear => 5678',

// 'Watermelon => 6789']

// Pear => 8

// Watermelon => 10

// Kiwi => 4

