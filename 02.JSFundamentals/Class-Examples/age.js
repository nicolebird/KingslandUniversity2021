let age = 10;


// if (age == 10){
//     let age = 11;
//     console.log(age);
//     //this console log handles within the if statement
// }
// console.log(age);
// //this console log handles the entire statement as a whole

function birthday(){
    age ++;
}

function friendsBirthday(){
    let age = 11;
    age ++;
    console.log("friends age" + age);
}

birthday();
friendsBirthday();
console.log("our age: " + age);