//check GitHub for corrections.  Followed along but this shit doesn't work 100%

function solve() {
    let buttonChoose = document.getElementById("dropdown");
    let theBox = document.getElementById("box");
    let theList = document.getElementById("dropdown-ul");
    buttonChoose.addEventListener("click", function () {
        let currentStyle = theList.style.display;
        
        if(currentStyle != "block"){
            theList.style.display = "block";
        }else{
            theList.style.display = "none";
            theBox.style.backgroundColor = "rgb(114,112,112)";
        }
    });
    theList.addEventListener('click', (event) => {
        //console.log("The event is", event);
        let newBg = event.target.textContent;
        theBox.style.backgroundColor = newBg;
        //console.log(newBG);
        theBox.style.backgroundColor = newBG;
    });
}

















//--------------------
//Another code
// function solve() {

//     const buttonChoose = document.getElementById('dropdown');
//     const theList = document.getElementById('dropdown-ul');
//     const theBox = document.getElementById('box');

//     buttonChoose.addEventListener('click', function() {

//         switch (theList.style.display) {
//             case "":
//             case "none":
//                 theList.style.display = 'block';
//                 break;
//             case "block":
//                 theList.style.display = 'none';
//                 theBox.style.backgroundColor = 'rgb(114, 112, 112)';

//                 break;

//         }

//     });

//     theList.addEventListener('click', function(e) {
//         theBox.style.backgroundColor = e.target.textContent;
//     });
// }