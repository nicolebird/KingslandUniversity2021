function main() {
    const links = document.querySelectorAll("a");
    const visits = document.querySelectorAll("p");
  
    for (let i = 0; i < links.length; i++) {
      updateVisitors(links[i], visits[i]);
    }
  
    function updateVisitors(link, visit) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        let count = parseInt(visit.innerHTML.replace(/^\D+/g, ''));
        visit.innerHTML = `visited ${++count} times`;
      });
    }
}


//---------------------------------------------------------------------------------------------------------------------------------//

// //Another option
// function solve() {
//   let websites = document.querySelectorAll('.link-1');
//   Array.from(websites).forEach(website => {
//       website.addEventListener(`click`, (ev) => {
//           let paragraph = website.querySelector('p');
//           let counter = paragraph.textContent.split(` `)[1];
//           counter++;
//           paragraph.innerText = `visited ${counter} times`;
//       });
//   });
// }