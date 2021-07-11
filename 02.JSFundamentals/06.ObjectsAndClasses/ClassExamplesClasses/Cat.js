//Write a function that receives array of strings in the following format:
// `{cat name} {age}`
//Create a class Cat that receives the name and the age parsed from the input
//It should also have a function named meow() that will print `{cat name}, age {age} says Meow` on the console.
//For each of the strings provided you must create a cat object

//INPUT: [`Mellow 2`, `Tom 5`]
//OUTPUT: Mellow, age 2 says Meow
///////// Tom, age 5 says Meow

//TIP: 1)Create a class  2)Set properties name and age  3) Set a 'meow` to be a function that prints the result  4)Parse the input data  5) Create all objects using class constructor and the parsed input data and store them in an array  6)Loop through the array using the for ... of loop and invoke .meow() method

function main(catsInfo){
    class Cat {
        constructor(name,age){
            this.name = name,
            this.age = age;
            this.meow = () =>
                console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }
    let catsArray = [];
    for (let i = 0; i < catsInfo.length; i++) {
        let currentCat = catsInfo[i].split(` `);
        // currentCat = ["Mellow", "2"]
        catsArray.push(new Cat(currentCat[0], currentCat[1]));
    }
    for(let cat of catsArray){
        cat.meow();
    }
}

main([`Mellow 2`, `Tom 5`]);