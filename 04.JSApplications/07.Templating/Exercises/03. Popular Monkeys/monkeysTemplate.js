//this is from the jQuery library
$(() => {
    //monkeys grab for each the html information when the button is clicked.  html.find when  the button is clicked it finds the monkey ID and displays a block that contains the html that was preset into the problem. 
    monkeys.forEach(m => {
        let html = $(getHTML(m));
        html.find('button').on('click', () => {
            $(`#${m.id}`).css('display', 'block');
        });

        $('.monkeys').append(html);
    });
});

function getHTML(context) {
    let source = $('#monkey-template').html();
    //this within the function makes it work.  Tried it outside of the function and got nada!  This is required for handlebars to function in this problem/solution
    let template = Handlebars.compile(source);
    let html = template(context);

    return html;
}

//---------------------------------------
//Original skeleton (template starter given)
// $(() => {
//     // TODO
// });

//Required for Handlebars and if you include it in the HTML encase it in script tags
//   // compile the template
//   var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
//   // execute the compiled template and print the output to the console
//   console.log(template({ doesWhat: "rocks!" }));
