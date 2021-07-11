//Write a closure that can create and modify objs.  All created objs should be kept and be accessible by name.  You should support the following functionality: create <name> - creates an obj w/ the supplied <name>  create <name> inherits <parentName> - creates an obj w/ the given <name>, that inherits from the parent obj w/ the <parentName>  set <name> <key> <value> - sets the property w/ key equal to <key> to <value> in the obj with the supplied <name>  print <name> - prints the obj w/ the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>..." - the printing should also print all inherited properties from the parnet objs. Inherited properties should come after own properties.  
//INPUT: will come as an array of strings - each string represents a command to be executed from your closure. 
//OUTPUT: For every print command - you should print on the console all properties of the obj in the above mentioned format. 
//CONSTRAINTS: All commands will always be valid, there will be no nonexistent or incorrect input. 

function main(inputArr) {

    let carObj = (function() {
        return {
            //create is the fx and name is the arg
            create(name) {
                this[name] = {};
            },
            createInherit(name, parent) {
                this[name] = Object.create(this[parent]);
            },
            set(name, key, value) {
                this[name][key] = value;
            },
            print(name) {
                let objectToPrint = this[name];
                let parent = Object.getPrototypeOf(objectToPrint);
                parent = Object.entries(parent); // [[key, value], [key, value]]
                objectToPrint = Object.entries(objectToPrint);

                let output = [];
                for (const [key, value] of objectToPrint) {
                    output.push(`${key}:${value}`);
                }
                for (const [key, value] of parent) {
                    output.push(`${key}:${value}`);
                }
                console.log(output.join(', '));
            }
        };
    })();

    inputArr.forEach(cmd => {
        const [command, obj, prop, value] = cmd.split(' ');
        if (command === 'create') {
            // create
            if (value) {
                // create with inheritance
                carObj.createInherit(obj, value);
            } else {
                // create an object 
                carObj.create(obj);
            }
        } else if (command == 'set') {
            //  set 
            carObj.set(obj, prop, value);
        } else {
            // print
            carObj.print(obj);
        }
    });

}

main([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);

//------------ANOTHER WAY
// function main(inputArr) {


//     let carObj = (() => {
//         let obj = {};
//         let methodBuilder = (inputObj) => ({
//             create(name) {
//                 inputObj[name] = {};
//             },
//             createInherit(name, parent) {
//                 inputObj[name] = Object.create(inputObj[parent]);
//             },
//             set(name, key, value) {
//                 inputObj[name][key] = value;
//             },
//             print(name) {
//                 let objectToPrint = inputObj[name];
//                 let parent = Object.getPrototypeOf(objectToPrint);
//                 parent = Object.entries(parent); // [[key, value], [key, value]]
//                 objectToPrint = Object.entries(objectToPrint);

//                 let output = [];
//                 for (const [key, value] of objectToPrint) {
//                     output.push(`${key}:${value}`);
//                 }
//                 for (const [key, value] of parent) {
//                     output.push(`${key}:${value}`);
//                 }
//                 console.log(output.join(', '));
//             }
//         })

//         Object.assign(obj, methodBuilder(obj))
//         return obj;

//     })();

//     inputArr.forEach(cmd => {
//         const [command, obj, prop, value] = cmd.split(' ');
//         if (command === 'create') {
//             // create
//             if (value) {
//                 // create with inheritance
//                 carObj.createInherit(obj, value);
//             } else {
//                 // create an object 
//                 carObj.create(obj);
//             }
//         } else if (command == 'set') {
//             //  set 
//             carObj.set(obj, prop, value);
//         } else {
//             // print
//             carObj.print(obj);
//         }
//     });

// }

// main([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]);

//--------ANOTHER WAY
// function cars(commands) {
//     let map = new Map();
//     let carManager = {
//         create: function ([name, , parent]){
//             parent = parent ? map.get(parent) : null;
//             let newObj = Object.create(parent);
//             map.set(name, newObj);
//             return newObj;
//         },
//         set: function ([name, key, value]) {
//             let obj = map.get(name);
//             obj[key] = value;
//         },
//         print: function ([name]) {
//             let obj = map.get(name);
//             let allProperties = [];
//             Object.keys(obj).forEach(key => allProperties.push(`${key}:${obj[key]}`));
//             while(Object.getPrototypeOf(obj)) {
//                 Object.keys(Object.getPrototypeOf(obj)).forEach(key => allProperties.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));
//                 obj = Object.getPrototypeOf(obj);
//             }
//             console.log(allProperties.join(', '));
//         }
//     };

//     for(let cmd of commands){
//         let tokens = cmd.split(' ');
//         let action = tokens.shift();
//         carManager[action](tokens);
//     }
// }

// main([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]);