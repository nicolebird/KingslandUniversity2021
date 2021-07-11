//Examples of For of and For in loops

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let output = "";
//line 1-3 included in all of this code

// for(let i = 0; i < weekDays.length; i++){
//     output == weekDays[i] + ` `;
// }
// console.log(output);
//line 6-9 is one way to do this code

// for(let day of weekDays){
//     output += day + ` `;
// }
//lines 12-14 is the second way

for( let index in weekDays){
    let day = weekDays[index];
    output += day + ` `;
}
//lines 17-20 is the third way
console.log(output);
//same console log for all of the options

//this for loop can only move forward.

//Useful in the topic objects
//Not as robust as basic for loops