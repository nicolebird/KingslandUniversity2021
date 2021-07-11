//the button to convert and give a result doesn't function .. find out why
// function solve() {

//   let input = document.getElementById('input');
//   let result = document.getElementById('result');
//   let selectMenuTo = document.getElementById('selectMenuTo');
//   let optionBinary = document.createElement('option');
//   optionBinary.value = 'binary';
//   optionBinary.innerHTML = 'Binary';
//   let optionHexadecimal = document.createElement('option');
//   optionHexadecimal.value = 'hexadecimal';
//   optionHexadecimal.innerHTML = 'Hexadecimal';
//   selectMenuTo.appendChild(optionBinary);
//   selectMenuTo.appendChild(optionHexadecimal);

//   document.getElementsByTagName('button')[0].addEventListener("click", calculate);

//   function calculate() {
//       if (selectMenuTo.value === 'binary') {
//           result.value = Number(input.value).toString(2);
//       } else if (selectMenuTo.value === 'hexadecimal') {
//           result.value = Number(input.value).toString(16).toUpperCase();
//       }
//   }
// }

//--------------------
function solve() {
 
  let addbut = document.getElementsByTagName('button')[0];
  let input = document.querySelector("input[type=text]");
  let fLetter='';
 
 
     addbut.addEventListener('click', function(){
    
      let InputString = input.value;
     
      fLetter = InputString[0].toUpperCase();
      let index = fLetter.charCodeAt(0) - 65;  
      //console.log(index);
      let Allol = document.querySelectorAll("ol li");  
      if (Allol[index].textContent === ''){
         Allol[index].textContent += InputString.charAt(0).toUpperCase() + InputString.slice(1).toLowerCase(); 
      }else{
         Allol[index].textContent += ", "+ InputString.charAt(0).toUpperCase() + InputString.slice(1).toLowerCase();  
      }
      input.value = '';
      
      });
  }