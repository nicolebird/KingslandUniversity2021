// In this problem, you should create a JS functionality which 
// creates articles and appends them into some article section.
// The programs in this language are called scripts. 
// They can be written right in the HTML and executed automatically as the page loads.
// Scripts are provided and executed as a plain text. 
// They don't need a special preparation or a compilation to run.
// In this aspect, JavaScript is very different from another language called Java. 

// Constraints: Title value from the title input should be a heading 3 element <h3>
//  Content text from the textarea element should be a paragraph <p>
//  Both new created elements (h3 and p) should be appended to a new article element <article>
//  The current article element should be appended to the section which has an id articles (#articles) 
// You should create new article element only if title and content are not e

function createArticle() {
    //----------- GET THE DATA -----------
    let articleTitle = document.getElementById('createTitle');
    let articleContent = document.getElementById('createContent');
    let section = document.getElementById('articles');
  
    if (articleTitle === null || articleContent === null || section === null) {
      throw new Error('Something is wrong...');
    }
  
    if (articleTitle.value === '' || articleContent.value === '') {
      return;
    }
  
    //-------- CONSTRUCT THE HTML --------
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    article.appendChild(h3);
    article.appendChild(p);
    section.appendChild(article);
  
    //----------- FILL THE HTML ----------
    h3.innerHTML = articleTitle.value;
    p.innerHTML = articleContent.value;
  
    //----------- CLEAR THE INPUT FIELDS ----------
    articleTitle.value = '';
    articleContent.value = '';
  }