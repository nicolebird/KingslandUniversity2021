function loadCommits() {
    let usernameValue = document.getElementById('username').value;
    let repoValue = document.getElementById('repo').value;
    let githubURL = `https://api.github.com/repos/${usernameValue}/${repoValue}/commits`;
    let theUL = document.getElementById('commits');
  
    let imAPromise = fetch(githubURL); // I'm a new promise! I have res, reject
  
      imAPromise.then( (response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error(`${response.status} ${response.statusText}`);
        }
      }) // returning response.json()..becomes this new variable called parsedResponse
      .then( ( parsedResponse ) => {
        console.log(parsedResponse);
  
        for ( let eachCommit of parsedResponse) {
          console.log("Each commit is ", eachCommit)
          let tempLI = document.createElement('li');
          tempLI.textContent = `${eachCommit.commit.author.name}: ${eachCommit.commit.message}`;
          console.log(tempLI);
          theUL.appendChild(tempLI);
        }
      })
      .catch( (error) => {
        console.log(error);
      });
  
  }

//   //--------------------
//   function loadCommits() {
//     const username = document.getElementById('username').value;
//     const repoName = document.getElementById('repo').value;
//     const ul = document.getElementById('commits');

//     const url = `https://api.github.com/repos/${username}/${repoName}/commits`;

//     fetch(url).then((res) => {
//         if (res.ok) {
//             // check if everything is ok 
//             return res.json();
//         }
//         throw (res);

//     }).then((resJson) => {
//         // If status == 200
//         resJson.forEach(({ commit }) => {
//             let message = `${commit.author.name} : ${commit.message}`;
//             loadToDom(ul, message);
//         });

//     }).catch((err) => {
//         console.log(err);
//         //   Any other status or technical issues 
//         let message = `Error : ${err.status} : ${err.statusText}`;
//         loadToDom(ul, message);
//     });

// }


// function loadToDom(el, text) {
//     let li = document.createElement('li');
//     li.textContent = text;
//     el.appendChild(li);
// }

// //--------------

// async function loadCommits() {
//     const username = document.getElementById('username').value;
//     const repoName = document.getElementById('repo').value;
//     const ul = document.getElementById('commits');

//     const url = `https://api.github.com/repo/${username}/${repoName}/commits`;

//     try {
//         const res = await fetch(url);
//         if (!res.ok) {
//             throw (res);
//         }
//         const resJson = await res.json();
//         resJson.forEach(({ commit }) => {
//             let message = `${commit.author.name} : ${commit.message}`;
//             loadToDom(ul, message);
//         });

//     } catch (err) {
//         console.log(err);
//         //   Any other status or technical issues 
//         let message = `Error : ${err.status} : ${err.statusText}`;
//         loadToDom(ul, message);
//     }
// }


// function loadToDom(el, text) {
//     let li = document.createElement('li');
//     li.textContent = text;
//     el.appendChild(li)
// }

// //---------------

// function loadCommits() {
//     // Try it with Fetch API
//     const username = document.getElementById('username').value;
//     const repo = document.getElementById('repo').value;
//     let gitHubURL = `https://api.github.com/repos/${username}/${repo}/commits`;
//     let theUL = document.getElementById('commits');
//     // (.then) is one of the most common form of (promises)
//     fetch(gitHubURL) // expects THEN to gice back a response
//     .then( (response) => { // .then <-- is the "new Promise()"
//         if (response.ok){// built in == true
//             return response.json();
//         } else {
//             console.log(response);
//             throw `${response.status} ${response.statusText}`;
//         }
//     })
//     .then( (parsedResponse) => {// parsedResponse === the output of the previous (.then func promise)
//         console.log(parsedResponse);
//         for(let eachCommit of parsedResponse){
//             let tempLI = document.createElement('li');
//             tempLI.textContent = `${eachCommit.author.login}: ${eachCommit.commit.message}`;
//             theUL.appendChild(tempLI);
//             console.log("Each commit is ", eachCommit);
//         }
//     })
//     .catch( (error) => {
//         console.log(error);
//     });
//     // console.log(username);
//     // console.log(repo);
//     // console.log(gitHubURL);
// }