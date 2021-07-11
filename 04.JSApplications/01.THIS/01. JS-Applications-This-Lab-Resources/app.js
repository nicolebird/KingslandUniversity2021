function solve() {
    let buttonChoose = document.getElementById("dropdown");
    let theBox = document.getElementById("box");
    let theList = document.getElementById("dropdown-ul");
    buttonChoose.addEventListener("click", function () {
        let currentStyle = theList.style.display;
        currentStyle !== "block"
            ? (theList.style.display = "block")
            : (theList.style.display = "none");
    });
    theList.addEventListener('click', (event) => {
        let newBg = event.target.textContent;
        theBox.style.backgroundColor = newBg;
    });
}