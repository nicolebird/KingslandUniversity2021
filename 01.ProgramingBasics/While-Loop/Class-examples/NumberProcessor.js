//PROBLEM DONE WITH IF/ELSE IF INSTEAD OF SWITCH CASE

function numberProcessor(num, commands){
    let number = num;
    
    while (command !== `End` && command != undefined){
        let command = commands.shift();
        switch(command){
            case `Inc`: 
                num++; 
                break;
            case `Dec`: 
                num--; 
                break;
        }
        command = commands.shift();
    }
    console.log(num);
}

//numberProcessor(5, [`Inc`, `End`]);
numberProcessor(5, [`Dec`, `End`]);

// main = numberProcessor
// [] needed to tell main the input is a list and not a single name/number/string

//-------------------------------------------------------------


//PROBLEM DONE WITH IF/ELSE IF INSTEAD OF SWITCH CASE

// function main(num, commands){
//     let number = num;
//     let command = commands.shift();
//     while (command !== `End` && command != undefined){
//         if(command == `Inc`){
//            num++;
//         }else if(command == `Dec`){
//             num--;
//         }
//         command = commands.shift();
//     }
//     console.log(num);
// }

// main([5, `Inc`, `End`, `Dec`]);





