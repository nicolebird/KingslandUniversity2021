fetch('https://swapi.co/api/people/4')
    .then((response)=>response.json())   
    .then((data)=> console.log(JSON.stringify(data)))
    .catch((error)=>console.error(error));

// let button = document.querySelector(`#load`);
// button.addEventListener(`click` function loadRepos(){
//     let url = `https://api.github.com/user/testnakov/repos`;
//     const httpRequest = new XMLHttpRequest();
//     httpRequest.addEventListener(`readystatechange`, function (){
//         if (httpRequest.readyState == 4 && httpRequest.status == 200){
//             document.getElementById(`res`).textContent = httpRequest.responseText();
//         }
//     });

//     httpRequest.open("GET", url);
//     httpRequest.send();
// });