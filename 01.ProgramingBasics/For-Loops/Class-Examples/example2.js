// let letter = String.fromCharCode(97); // 'a'
// let charNum = letter.charCodeAt(0);
// console.log(charNum);
// charNum++;
// letter = String.fromCharCode(charNum/**98 */ );
// console.log(letter);//'b'


//PASSWORD EXAMPLE
let password = "Secrets";

let outsidePass = "Kecret";

for(let i=0; i<password.length;i++){
    if(password.charCodeAt(i)!=outsidePass(i)){
        //bad password, try again
    }
    
}

password("Bad password, try again!");