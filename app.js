const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    console.log('Hello World')
    res.write('Hello World')
    res.end()
}
).listen(3000)