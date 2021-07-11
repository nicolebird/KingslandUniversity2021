// function attachEvents() {

//     document.getElementById('btnLoadPosts').addEventListener('click', () => {
//         fetchOptions('https://blog-apps-c12bf.firebaseio.com/posts/.json');
//     });

//     document.getElementById('btnViewPost').addEventListener('click', () => {
//         const postId = document.getElementById('posts').value;
//         fetchPost(`https://blog-apps-c12bf.firebaseio.com/posts/${postId}.json`);
//     });
// }

// async function fetchOptions(url) {
//     let response = await fetch(url);
//     if (!response.ok) {
//         return console.log(response);
//     }
//     // Everything is ok 
//     let json = await response.json();
//     // Convert the object to an array 
//     let resArr = Object.entries(json);
//     // Clear the select options because loading new ones;
//     document.getElementById('posts').innerHTML = '';
//     // Loop throght the posts 
//     console.log(resArr);
//     resArr.forEach(([postId, { title }]) => {
//         // Create option for the select element 
//         const option = document.createElement('option');
//         option.value = postId;
//         option.textContent = title;
//         // Append the option to the select element 
//         document.getElementById('posts').appendChild(option);
//     });
// }


// async function fetchPost(url) {

//     let response = await fetch(url);
//     if (!response.ok) {
//         return console.log(response);
//     }
//     // Everything is ok 
//     let json = await response.json();
//     document.getElementById('post-title').textContent = json.title;
//     document.getElementById('post-body').textContent = json.body;

//     if (json.comments) {
//         let commentsArr = Object.entries(json.comments);
//         commentsArr.forEach(([{ text }]) => {
//             const li = document.createElement('li');
//             li.textContent = text;
//             document.getElementById('post-comments').appendChild(li);
//         });
//     }
// }

// attachEvents();

//------------Ron's code
function attachEvents() {
	let btnLoadPosts = document.getElementById("btnLoadPosts");
	let myDropdown = document.getElementById("posts");
	let btnViewPost = document.getElementById("btnViewPost");
	let postTitle = document.getElementById("post-title");
	let postBody = document.getElementById("post-body");
	let postComments = document.getElementById("post-comments");

	btnLoadPosts.addEventListener("click", function () {
		console.log("The button has been clicked! ");
		let imAPromise = fetch("https://blog-apps-c12bf.firebaseio.com/posts.json", { method: "GET"}); // I'm a new promise! I have res, reject

		imAPromise
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				// Loop over the data
				for (let key in data) {
					console.log(key, data[key].title);
					let tempOption = document.createElement("option");
					tempOption.value = key;
					tempOption.textContent = data[key].title;
					myDropdown.appendChild(tempOption);
				}
			})
			.catch((error) => console.log(error));
	});

	btnViewPost.addEventListener("click", function () {
		postTitle.textContent = "";
		postBody.textContent = "";
		postComments.innerHTML = "";
		console.log(myDropdown.value);
		let thePost = fetch(
			`https://blog-apps-c12bf.firebaseio.com/posts/${myDropdown.value}.json`
		);
		thePost
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				// Inside the response!
				console.log(data);
				postTitle.textContent = data.title;
				postBody.textContent = data.body;
				data.comments.forEach((comment) => {
					let tempLI = document.createElement("li");
					tempLI.textContent = comment.text;
					postComments.appendChild(tempLI);
				});
			})
			.catch((error) => console.log(error));
	});
}
attachEvents();