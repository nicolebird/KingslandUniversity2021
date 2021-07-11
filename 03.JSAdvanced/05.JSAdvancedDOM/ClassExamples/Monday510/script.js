//Document object model DOM
//Nodes are parents and children



let h1Element = document.getElementsByTagName(`h1`)[0];  // Assigning a variable the value of an element from the browser

console.log(h1Element);
h1Element.innerHTML = "DOM Is So Cool!~";

// let secondLi = document.getElementsByTagName(`li`)[1];
// //Li means list

// secondLi.innerHTML += " - DONE";

// console.log("Second LI x2", secondLi);

//Creating a new DOM element
// let p = document.createElement("p");
// let li = document.createElement("li");

// //Creat a copy/cloning DOM element
// let li = document.getElementById("my-list");
// let newLi = li.cloneNode(true);
// //The above code creates a new element. But these elements don't exist anywhere  except as values inside variables

// let parent = document.getElementById(`div1`);
// let firstChild = document.getElementById(`p1`);
// let secondChild = document.getElementById(`p2`);

// console.log(parent,firstChild,secondChild);
// firstChild.remove();
// parent.removeChild(secondChild);


//Creating DOM Elements
// let list = document.createElement("ul");
// let firstLi = document.createElement("li");
// firstLi.textContent = "Peter";
// list.appendChild(firstLi);
// let secondLi = document.createElement("li");
// secondLi.innerHTML = "<b>Maria</b>";
// list.appendChild(secondLi);
// document.body.appendChild(list);
// console.log(document);


//DOM Properties
let text = document.createElement('p');
let node = document.createTextNode('This is a new paragraph.');
// text.appendChild = 'New text for element.';
// let someHTML = myElement.innerHTML;
// someHTML.innerHTML = 'New text for element.';
document.body.appendChild(text);
console.log(text.innerHTML);


//HTML Attributes and Methods
//getAttributes() - returns the value of attributes of specified HTML element
const inputEle = document.getElementByTagName(`input`)[0]; //Selecting the HTML DOM element
let whatType = inputEle.getAttribute('type'); //text
let whatType2 = inputEle.getAttribute('name'); //username


console.log(document.getElementsByID('myDiv').classList);
const someElement = document.getElementsByID('myDiv');
someElement.classList.add('testClass');
console.log(someElement);
someElement.classList.remove('test class');










