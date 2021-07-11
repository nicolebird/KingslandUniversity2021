function addItem() {
    let newItemText = document.getElementById("newItemText").value;
    let newItemValue = document.getElementById("newItemValue").value;
    const select = document.getElementById("menu");
    const newOption = document.createElement("option");
    let attOption = document.createAttribute("value");
    if (newItemText != "" || newItemValue != "") {
      select.appendChild(newOption);
      console.log(newItemText, newItemValue);
      attOption.value = newItemValue;
      newOption.innerHTML = newItemText;   
      newOption.setAttributeNode(attOption);
    }
    // clear text boxes
    newItemText.value = '';
    newItemValue.value = '';
}