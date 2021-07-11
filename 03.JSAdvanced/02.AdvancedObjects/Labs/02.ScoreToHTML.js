//My code
function main(input) {
    let json = input[0];
    let objectsArray = JSON.parse(json);
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    for(let object of objectsArray){
        html += `  <tr><td>${htmlEscape(object.name)}</td><td>${object.score}</td></tr>\n`;
    }

    html += '</table>';

    console.log(html);


    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

main(['[{"name":"Peter","score":479},   {"name":"George","score":205}]']
);

// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Peter</td><td>479</td></tr>
//   <tr><td>George</td><td>205</td></tr>
// </table>

//Class Code
function main(someJSON) {
    console.log(someJSON);
    let inputLabels = JSON.parse(someJSON);
    console.log(inputLabels);

    let finalhtml ='<table>\n';
    for(let item of inputLabels){
        console.log('the item is ', item.name );
        finalhtml += `<tr><td>${item.name}</td><td>${item.score}</td></tr>\n`;
    }

}

main(['[{"name":"Peter","score":479},   {"name":"George","score":205}]']);

//Class code
function main(json) {

    // take the json, parse it, turns into array of objects, held in the scoreArr variable
    let scoreArr = JSON.parse(json);

    // 'initiate' the html output with the <table> (we'll close output with </table> later)
    // dont forget \n after to start new lines with each in output
    let output = `<table>\n`;
    // creating the first <tr> with the column (and object) keys
    output += ` <tr><th>name</th><th>score</th></tr>\n`;

    // iterating through each object (named element) 
    scoreArr.forEach(element => {
        // and forEach element we create a new <tr> where we input the values of the object
        output += `   <tr><td>${element.name}</td><td>${element.score}</td></tr>\n`;
    });

    // closing the thing
    output += `</table>`;
    // last detail to sort out, replace the '&' with '&amp'
    output = output.replace(/[&]/g, '&amp;');

    console.log(output);
}

main(['[{"name":"Peter","score":479},   {"name":"George","score":205}]']);

