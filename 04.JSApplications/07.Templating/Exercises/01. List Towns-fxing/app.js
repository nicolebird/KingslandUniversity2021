let displayDIV = document.getElementById('root');
let input = document.getElementById('towns');
let loadButton = document.getElementById('btnLoadTowns');
loadButton.addEventListener('click', () => {
    let townsArr = input.value.split(', ');
    let townsObj = {
        towns: townsArr,
    };
let townTemp = `
    <ul>
        {{#each towns}}
        <li>{{this}}</li>
        {{else}}
        <p>Please enter towns</p>
        {{/each}}
    </ul>
`;

let template = Handlebars.compile(townTemp);
displayDIV.innerHTML = template(townsObj);
});

// //----R GH
// document.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     if (evt.target && evt.target.nodeName === 'BUTTON') {
//       let towns = document.getElementById('towns').value;
//       if (towns !== '') {
//         towns = towns.split(/[, ]+/g).map(x => { return { name: x } });
//       }
  
//       fetch('template.hbs')
//         .then(x => x.text())
//         .then(templateRaw => {
//           let template = Handlebars.compile(templateRaw);
//           document.getElementById('root').innerHTML = template({ towns });
//         })
//         .catch(err => console.log(err));
//     }
//   });