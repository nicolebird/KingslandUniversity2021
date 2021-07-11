//Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.  The input comes as a single number perimeter.  The boundaries are:
//age: 0-2 = baby  (age >= 0 && age <= 2)
//age: 3-13 = child (age >= 3 && age <= 13)
//age: 14-19 = teenager (age >= 14 && age <= 19)
//age: 20-65 = adult (age >= 20 && age <= 65)
//age: greater than or equal to 66 = elder (age >= 66)

//Use a basic if-else statement set up with a console log for each of the options.  The code will end depending on the age in the output.

function ageRange(ages){

    if (ages >= 0 && ages <= 2) {
        console.log(`baby`);
    } else if (ages >= 3 && ages <= 13) {
        console.log(`child`);
    } else if (ages >= 14 && ages <= 19) {
        console.log(`teenager`);
    } else if(ages >= 20 && ages <= 65) {
        console.log(`adult`);
    } else if(ages >= 66){
        console.log(`elder`);
    }
}

ageRange(20); //adult
ageRange(5); //child
ageRange(67); //elder