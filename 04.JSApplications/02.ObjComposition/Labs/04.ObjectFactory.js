//Write a fx that can compose objs.  You will receive a string and your goal is to create a new obj w/all the unique properties you were given. 
//INPUT: will come as a string, which represents an array of objs
//OUTPUT: You should print the newly created obj.

function main(inputString) {

    let arr = JSON.parse(inputString);

    //let output = arr.reduce((acc, curr) => ({...acc, ...curr }), {});
    let output = Object.assign({}, ...arr);

    console.log(output);
}

main(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
//{ canMove: true, doors: 4, capacity: 5 }
main(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);
//{ canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true }