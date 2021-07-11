console.log("DOM DOM DOM!!!!");
console.log("The document is" , document);

//Create an h1 tag
//Put some text in the h1 tag
//add it to the document

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = "DOM is the BOM(B)!";

let mainDiv = document.createElement('div');
document.body.prepend(mainDiv);
let divWeJustMade = document.getElementsByTagName('div')[0];
console.log("Div we just made" , divWeJustMade);
divWeJustMade.appendChild(h1Tag);
let pageTitle = document.getElementById('page_title'); //reached into the document, made a variable from the page title
console.log('The page title is', pageTitle);
pageTitle.textContent = "Whatever you want it to equal"; 

// alert(window.navigator.userAgent);
// console.log(navigator.geolocation, navigator.language);
// console.log(screen.width + 'x' + screen.height);

//Event Listeners
h1Tag.addEventListener("click", makeRed);

function helloClicked(){
    console.log("Hello clicked!");
}

function makeRed(){
    h1Tag.style.color = 'red';
    console.log("The function worked!");
}




