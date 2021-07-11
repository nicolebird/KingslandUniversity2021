//Compare this to the PDF.  This is the class example

//Receive a string
//Print all the characters on separate lines

//input: AWord  /// output: A W o r d (diagonally)

function main(string){
    //function receives a string (input)
        for(let characters of string){
        //use for of loop to let characters of string be on a separate line.
            console.log(characters);
            //print out the characters (output)
        }
    }
    main(`AWord`);
    main(`Kingsland`);
    
    //OTHER WAY TO MAKE THIS WORK
    function main(string){
    //function receives a string (input)
        for(let i =0; i <string.length;i++){
        //use for to let characters of string be on a separate line.
        console.log(characters.charAt(i));
         //print out the characters (output)
        }
    }
        main(`AWord`);
        main(`Kingsland`);
    
    //Another way to solve this
    function main(string){
    //function receives a string (input)
        for(let index of string){
        //use for of loop to let characters of string be on a separate line.
        console.log(characters.charAt(index));
         //print out the characters (output)
        }
    }
main(`AWord`);
main(`Kingsland`);
    
    
    