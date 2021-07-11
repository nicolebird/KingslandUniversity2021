// function attachEventsListeners() {
    
//     let inputFieldElement = document.querySelector('#inputDistance');
//     let unitFromElement = document.querySelector('#inputUnits');
//     let outputFieldElement = document.querySelector('#outputDistance');
//     let unitToElement = document.querySelector('#outputUnits');
//     let convertButtonElement = document.querySelector('#convert');
    
//     let conversionRatesFromMeter = {
//         km:1000,
//         m:1,
//         cm:0.01,
//         mm:0.001,
//         mi:1609.34,
//         yrd:0.9144,
//         ft:0.3048,
//         in:0.0254,
//     };
//     convertButtonElement.addEventListener('click', function(){
 
//         let convertFrom = unitFromElement[unitFromElement.selectedIndex].value;
//         let convertTo = unitToElement[unitToElement.selectedIndex].value;
    
        
//         let valueInMeters = inputFieldElement.value * conversionRatesFromMeter[convertFrom];
//         let convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
//         outputFieldElement.value = convertedValue;
        
 
//     });
// }

//--------------------------------
function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onBtnClick);
    
    function onBtnClick() {
      let inputDistance = Number(document.getElementById('inputDistance').value);
      let outputDistance = document.getElementById('outputDistance');
      let inputUnits = document.getElementById('inputUnits').value;
      let outputUnits = document.getElementById('outputUnits').value;
  
      let inputToM = 0;
      let result = 0;
      switch (inputUnits){
        case 'km':
          inputToM = inputDistance * 1000;
          break;
        case 'm':
          inputToM = inputDistance;
          break;
        case 'cm':
          inputToM = inputDistance * 0.01;
          break;
        case 'mm':
          inputToM = inputDistance * 0.001;
          break;
        case 'mi':
          inputToM = inputDistance * 1609.34;
          break;
        case 'yrd':
          inputToM = inputDistance * 0.9144;
          break;
        case 'ft':
          inputToM = inputDistance * 0.3048;
          break;
        case 'in':
          inputToM = inputDistance * 0.0254;
          break;
      }
  
      switch (outputUnits){
        case 'km':
          result = inputToM / 1000;
          break;
        case 'm':
          result = inputToM;
          break;
        case 'cm':
          result = inputToM / 0.01;
          break;
        case 'mm':
          result = inputToM / 0.001;
          break;
        case 'mi':
          result = inputToM / 1609.34;
          break;
        case 'yrd':
          result = inputToM / 0.9144;
          break;
        case 'ft':
          result = inputToM / 0.3048;
          break;
        case 'in':
          result = inputToM / 0.0254;
          break;
      }
      outputDistance.value = result;
    }
}