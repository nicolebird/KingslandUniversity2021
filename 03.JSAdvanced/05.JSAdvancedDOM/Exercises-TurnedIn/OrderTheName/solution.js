function solve() {
    let inputElement = document.getElementsByTagName("input")[0];
    let addBtnElement = document.getElementsByTagName("button")[0];

    let orderListElement = document.getElementsByTagName("ol")[0];
    let listElements = document.getElementsByTagName("li");
  
    addBtnElement.addEventListener("click", function () {
        let inputName = inputElement.value;
  
        if (inputName) {
            let currentName = "";
            currentName += inputName[0].toUpperCase();
  
            for (let i = 1; i < inputName.length; i++) {
                currentName += inputName[i].toLowerCase();
            }
  
            let index = currentName.charCodeAt(0) - 65;
  
            if (listElements[index].textContent.length === 0) {
                listElements[index].textContent += currentName;
            } else {
                listElements[index].textContent += ", " + currentName;
            }
  
            inputElement.value = null;

            if (orderListElement[index].textContent.length === 0) {
                orderListElement[index].textContent += currentName;
            } else {
                orderListElement[index].textContent += ", " + currentName;
            }
  
            inputElement.value = null;
        }
    });
} 