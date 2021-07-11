// You will receive an array of strings. 
// For each string, create a div with a paragraph with the string in it.
// Each paragraph is initially hidden (display:none). 
// Add a click event listener to each div that displays the hidden paragraph. 
// Finally, you should append all divs to the element with an id "content".

function create(words){
    let divElement = document.getElementById('content');
    if(divElement === null){
        throw new Error('Something went wrong ...');
    }

    for(let word of words){
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = word;
        p.style.display = 'none';
        div.appendChild(p);

        divElement.appendChild(div);
    }

    divElement.addEventListener('click', function(evt){
        if(evt.target && evt.target.nodeName === 'DIV'){
            evt.target.firstElementChild.style.display = 'block';
        }
    });
}