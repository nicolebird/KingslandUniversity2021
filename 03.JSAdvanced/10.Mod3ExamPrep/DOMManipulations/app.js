//--------------OPTION ONE--------------------------------
// function encodeAndDecodeMessages() {
//     const messageToEncodeBox = document.querySelector('textarea');
//     const receiveMsgBox = document.getElementsByTagName('textarea')[1];
//     const buttonEncode = document.querySelector('button');
//     const buttonDecode = document.getElementsByTagName('button')[1];

//     //ES 6 way
//    //const [messageToEncodeBox, recieveMsgBox] = document.getElementsByTagName('textarea');
 


//     buttonEncode.addEventListener('click', encodeMessage);

//     function encodeMessage(){
//         console.log("Click event has fired");
//         let msgToEncode = messageToEncodeBox.value;
//         console.log("The message to encode is", msgToEncode);
//         let encodedMsg = msgToEncode.split("").map(eachLetter => eachLetter.charCodeAt() + 1).map(eachCode => eachCode.fromCharCode());
//         console.log(encodeMessage);
//         receiveMsgBox.value = encodedMsg;
//         messageToEncodeBox.value = "";

//     }
//     function decomessage(){
//         let msgToDecode = receiveMsgBox.value;
//     }
// }

//----------------- OPTION TWO
function encodeAndDecodeMessages() {
    //This way with const looks cleaner. Check into making the buttons function, not needed to pass the HW grader but want to see the full function code too.  
    const ELEMENTS = {
        encodeInput: document.getElementById("main").querySelector("textarea"),
        encodeBtn: document.getElementById("main").querySelector("button"),
        decodeTextArea: document.getElementById("main").querySelectorAll("textarea")[1],
        decodeBtn: document.getElementById("main").querySelectorAll("button")[1],
    };
    disableButton(ELEMENTS.decodeBtn);

    let encodeTextEventHandler = function () {
        let message = ELEMENTS.encodeInput.value;
        if (message === "") {
            return;
        }

        ELEMENTS.decodeTextArea.textContent = encodeMessage(message);
        ELEMENTS.encodeInput.value = "";
        enableButton(ELEMENTS.decodeBtn);
    };

    function encodeMessage(message) {
        let encoded = "";
        for (let i = 0; i < message.length; i++) {
            encoded += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }
        return encoded;
    }

    function enableButton (button) {
        button.disabled = false;
        button.style.background = "#234465";
    }

    let decodeTextEventHandler = function () {
        disableButton(ELEMENTS.decodeBtn);
        let message = ELEMENTS.decodeTextArea.textContent;

        ELEMENTS.decodeTextArea.textContent = decodeMessage(message);
    };

    function decodeMessage(message) {
        let decoded = "";
        for (let i = 0; i < message.length; i++) {
            decoded += String.fromCharCode(message[i].charCodeAt(0) - 1);
        }
        return decoded;
    }

    function disableButton(button) {
        button.disabled = true;
        button.style.background = "grey";
    }

    ELEMENTS.encodeBtn.addEventListener("click", encodeTextEventHandler);
    ELEMENTS.decodeBtn.addEventListener("click", decodeTextEventHandler);
}

