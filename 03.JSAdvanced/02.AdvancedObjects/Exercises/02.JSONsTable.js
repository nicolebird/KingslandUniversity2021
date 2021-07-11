function main(input) {
    let html = '<table>\n';
    // \n means new ling
    for(let line of input) {
        let object = JSON.parse(line);
        html += '  <tr>\n';
        html += `    <td>${htmlEscape(object.name)}</td>\n`;  //spaces look unnecessary but are needed for completion of the code correctly
    html += `    <td>${htmlEscape(object.position)}</td>\n`;
    html += `    <td>${object.salary}</td>\n`;
        html += '  </tr>\n';
    }
    html += '</table>';
    console.log(html);
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

main(['{"name":"Peter","position":"Manager","salary":100000}','{"name":"Teo","position":"Lecturer","salary":1000}', '{"name":"George","position":"Lecturer","salary":1000}']);
