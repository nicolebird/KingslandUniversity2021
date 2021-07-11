// function loadRepos() {
//   let gitHubURL = 'http://api.github.com/users/testnakov/repos';
//   let resultDIV = document.getElementById('res');
//   const httpRequest = new XMLHttpRequest();

//   httpRequest.addEventListener('readystatechange', () => {
//     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//       let tempDiv = document.createElement('div');
//       let theRepos = JSON.parse(httpRequest.responseText);
//       resultDIV.textContent = httpRequest.responseText;
//       console.log(theRepos);
//     }
//    });

//   httpRequest.open("GET", gitHubURL);
//   httpRequest.send();
// }

// loadRepos();


// readystatechange is a standard event for XMLHttpRequest objects, and so should be able to have functions listen on the event either using

// r.onreadystatechange = function() { ... };

// as well as

// r.addEventListener('readystatechange', function() { ... }, false);
//---------------- another


function loadRepos() {
  const xhr = new XMLHttpRequest();

  const url = `https://api.github.com/users/testnakov/repos`;



   xhr.onprogress = () => {
       document.querySelector('#res').innerHTML = `<img src="./loading.gif"/> `;
   };
   xhr.onload = () => {
       if (this.status == 200) {
           document.querySelector('#res').innerHTML = ``;
           document.querySelector('#res').textContent = this.responseText;
       }
   };


  // //  Method 2
  // xhr.addEventListener('readystatechange', () => {
  //     if (this.readyState == 4 && this.status == 200)
  //         document.querySelector('#res').textContent = this.responseText;

  // });

  xhr.open('GET', url);
  xhr.send();
}

// loadRepos();