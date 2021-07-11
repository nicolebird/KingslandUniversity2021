function loadRepos(){

	const username = document.getElementById(`username`).value;
	//clear the ul element innerHTML
	const repos = document.getElementById(`repos`);
	repos.innerHTML = ``;
	//construct the URL
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url).then((res) => {
		if(res.ok){
			return res.json();
		}
		throw new Error(`${res.status} - ${res.statusText}`);

		//this .then breaks down everything needed to get the data.  I appreciate the breaking down and sometimes shorter is not better if you go back and cannot understand what the heck you were doing.  
	}).then((data) => {
		console.log(data);
		data.forEach(repo => {
			let li = document.createElement(`li`);
			let a = document.createElement(`a`);
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
			repos.appendChild(li);

			//Another way if you know your way around the HTML stuff.  This shortens the code and makes it better time wise. 
			// repos.innerHTML += `<li><a href = "${repos.html_url}"> ${repo.full_name}</a></li>`;
		}).catch((err) => {
			let li = document.createElement(`li`);
			li.textContent = `${err}`;
			repos.appendChild(li);
		});
	});
}

//<ul><li><a></a></li></ul>
//just keeping track of HTML elements covered.  

//PDF stuff
//Write a JS fx that executes an AJAX request w/ Fetch API and loads all user github repos by a given username(taken from an input field w/ id "username") into a list (each repo as a list-item aka li) w/ id "repos".  Use the properties full_name and html_url of the returned objs to create a link to each repos's GitHub page.  If an error occurs (like 404 "Not Found"), append to the list a list-item (li) w/ the text current instead.  Clear the contents of the list before any new content is appended.  See highlighted lines of the skeleton for formatting details of each list item.  

