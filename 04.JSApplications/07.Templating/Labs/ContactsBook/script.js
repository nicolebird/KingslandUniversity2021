//---- JC code
// //console.log(contacts);
// let aContact = document.getElementById("contact-template").innerHTML;
// //console.log(aContact);
// let someT = Handlebars.compile(aContact);
// console.log(someT);
// let finalDiv = document.getElementById("final");
// finalDiv.innerHTML = someT(contacts);
// function detailsButton(id) {
// 	console.log(`the id is `, id);
// 	document.getElementById(id).style.display = "block";
// }
//------------

// //--Study time with Istvan and Chadd
// // console.log(contacts);

let contactDIV = document.getElementById('contacts');
let aContact = ` {{#each this}}
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
<div class="info">
  <h2>Name: {{name}}</h2>
  <button class="detailsBtn" onclick="showDetails({{id}})">Details</button>
  <div class="details" id="{{id}}" style="display: none;">
    <p>Phone number: {{phoneNumber}}</p>
    <p>Email: {{email}}</p>
  </div>
</div>
</div>
{{/each}}
`;
let template = Handlebars.compile(aContact);
contactDIV.innerHTML = template(contacts);
function showDetails(id) {
    document.getElementById(id).style.display = "block";
}
