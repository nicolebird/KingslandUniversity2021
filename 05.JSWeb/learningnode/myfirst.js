const http = require('http');
const dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    //line 6 brings in the exported file from myfirstmodule.js
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!');
}).listen(8080);