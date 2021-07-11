function solve() {

    // Retrieve RESULT <input> ID to later set the converted value 
    const resultTextField = document.getElementById('result');

    resultTextField.value = '';// wannabe default empty RESULT box if page reloaded
    
    // Retrieve <select> element's ID to use for appending "<option> elements" and later using for conditionals inside event listener
    const selectMenuTo = document.getElementById('selectMenuTo');
    

    // <option> BINARY
    const binaryOption = document.createElement('option');

    binaryOption.value = 'binary';// <- set value

    binaryOption.innerHTML = 'Binary';// <- set innerHTML

    selectMenuTo.appendChild(binaryOption);// <- add new <option> element to end of parent element <select>


    // <option> HEXADECIMAL 
    const hexadecimalOption = document.createElement('option');

    hexadecimalOption.value = 'hexadecimal';// <- set value

    hexadecimalOption.innerHTML = 'Hexadecimal';// <- set innerHTML

    selectMenuTo.appendChild(hexadecimalOption);// <- add new <option> element to end of parent element <select>
    
    // Retrieve "input" ID of NUMBER box
    const numberTextField = document.getElementById('input');

    // Retrieve "CONVERT IT" <button> 
    const convert = document.getElementsByTagName('button')[0];
    // Add click event to button
    convert.addEventListener('click', function(){

        // Set "input" value of NUMBER box "from a string to a number" after "click" event to prevent it from becoming a phantom value after the page reload
        const decimal = Number(numberTextField.value);

        if (selectMenuTo.value == 'binary'){// If <select> id="selectMenuTo">
                                                    // <option> value="binary" </option>
            resultTextField.value = decimal.toString(2);
            
        } else if (selectMenuTo.value == 'hexadecimal'){// else if <select> id="selectMenuTo">
                                                                    // <option> value="hexadecimal" </option>          
            resultTextField.value = decimal.toString(16).toUpperCase();
            
        }       

        return;
        
    });

    
    numberTextField.value = '';// wannabe default empty NUMBER box if page reloaded

}
