//Mine
function main(input) {
    jsonToHtml(input);
}

function jsonToHtml([input]) {
    let arr = JSON.parse(input);
    let html = `<table>\n  <tr>`.trim();
    for (let key of Object.keys(arr[0])) html += `<th>${key}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        html += "  <tr>";
        for (let value of Object.keys(obj)) {
            html += `<td>${htmlEsc(obj[value])}</td>`;
        }
        html += "</tr>\n";
    }
    console.log(html + "</table>".trim());

    function htmlEsc(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }
}

main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&BChocolate","Price":0.96}]']);
  

//Corrina's code
function main(JSONinput) {
	let inputLabels = JSON.parse(JSONinput);
	let finalhtml = "<table>\n";
	let objectKeys = Object.keys(inputLabels[0]);
	//console.log("the object keys are", objectKeys);
	finalhtml += "  <tr>";
	for (let i = 0; i < objectKeys.length; i++) {
		finalhtml += `<th>${objectKeys[i]}</th>`;
	}
	finalhtml += "</tr>\n";
	for (let b = 0; b < inputLabels.length; b++) {
		let objectValues = Object.values(inputLabels[b]);
		//console.log(item);
		finalhtml += "  <tr>";
		for (let j = 0; j < objectValues.length; j++) {
			finalhtml += `<td>${escape(objectValues[j])}</td>`;
		}
		finalhtml += "</tr>\n";
	}

	finalhtml += `</table>`;
	// finalhtml = finalhtml.replace(/[&]/g, "&amp;");
	console.log(finalhtml);
}

  
main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&BChocolate","Price":0.96}]']);
  

//main(['[{"Name":"Pesho" <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);


// You’re tasked to create an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the objects’ keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML.  
//Input The input comes as array with a single string argument (the array of objects). 
//Output The output should be printed on the console – for each entryrow in the input print the objectrepresentingit. Note: Object’s keys will always be the same.  HTML You are provided with an HTML file to test your table in the browser.