(() => {
    renderCatTemplate();

    function renderCatTemplate(){
        
        const oneCat = `<ul>
        {{#each this}}
        <li>
            <img src="images/{{imageLocation}}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn">Show status code</button>
                <div class="status" style="display: none" id={{id}}>
                    <h4>Status Code: {{statusCode}}</h4>
                    <p>{{statusMessage}}</p>
                </div>
            </div>
        </li>
        {{/each}}
      </ul>`;

      const template = Handlebars.compile(cat);
      const html = template{{ cats }};
    }
})

//------------------------------------------------------
// (() => {
//     'use strict';
//      renderCatTemplate();

//      async function renderCatTemplate() {
//          const src = await fetch('cats.hbs').then(res => res.text());
//          const template = Handlebars.compile(src);

//          //const cats = window.cats;
//          const html = template({ cats });

//          const container = document.getElementById('allCats');
//          container.innerHTML = html;

//          container.addEventListener('click', (e) => {
//              if(e.target.tagName === 'button'){
//                  console.log(e.target.dataset.id);
//                  const div = document.getElementById(e.target.dataset.id);
//                  div.style.display = div.style.display === 'block' ? 'none' : 'block';
//              }
//          });
//     }
// });

//The page renders BUT button doesn't work.  Why???

//--------------------another option
// $(() => {
//     renderCatTemplate();

//     function renderCatTemplate() {
//         cats.forEach(c => {
//             let html = $(getHTML(c));


//             html.find('button').on('click', (e) => {
//                 if (e.target.textContent == 'Show status code') {
//                     e.target.textContent = 'Hide status code';
//                     html.find(`#${c.id}`).css('display', 'block');
//                 } else {
//                     e.target.textContent = 'Show status code';
//                     html.find(`#${c.id}`).css('display', 'none');
//                 }
//             });

//             $('#allCats').append(html);
//         });
//     }

//     function getHTML(context) {
//         let source = $('#cat-template').html();
//         let template = Handlebars.compile(source);
//         let html = template(context);

//         return html;
//     }
// });
