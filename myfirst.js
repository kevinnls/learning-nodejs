var http = require('http');
var url = require('url')

http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/html'})
    if(req.url == '/sayhello'){
        res.write('Hello World!')
        res.end()
    }
    else if(req.url == '/saybye'){
        res.write('Bye World!')
        res.end()
    }
    else if(req.url == '/getJSON'){
        res.writeHead(200, {'content-type':'application/json'})
        let jsonobj = {
            name: 'kevin',
            age: '19'
        }
        res.end(JSON.stringify(jsonobj));
    }
    else{
        res.write('invalid url');res.end()
    }
}).listen(3000)