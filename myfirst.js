var http = require('http');
var mod = require('./myDateModule')

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'})
    res.write('Hello World!\n')
    res.end("The date and time are currently: " + mod.myDateTime());
}).listen(8080)
console.log("the server is listening on port 8080");
console.log("http://localhost:8080");
