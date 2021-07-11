// let person = {
//     firstName: `John`,
//     lastName: `Doe`,
//     age: 50
// };

// console.log(Object.defineProperties(person));


function makeList(someArray){
    //convert array to an object
    let myObject = {};
    for (let i = 0; i < someArray.length; i++) {
        //even entries are the key, odd is the value
        if(i % 2 === 0){
        //this finds the even values
            //console.log(`Even`, i);
            // console.log(`The key should be`,someArray[i]);
            // console.log(`The value should be`, someArray[i+1]);
            let myFood = someArray[i];
            let amountOfFood = someArray[i + 1];
            myObject[myFood] = amountOfFood;
            //myObject[someArray[i]] = someArray[i + 1];
        }else{
            //code here
            //console.log(`Odd`, i);
        }
        
    }
    console.log(myObject);

}

makeList([`Yoghurt`,48,`Rice`,138,`Apple`,52]);
makeList([`Potato`, 93,`Skyr`,63,`Cucumber`,18,`Milk`, 42]);