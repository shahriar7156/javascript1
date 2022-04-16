const http = require('http');
const hostname= '127.0.0.1';
const port= 3000;


const Myserver = http.createServer((req, res)=>
{
    res.writeHead(202,{'Content-Type' : 'text/html'});
    res.write("<h1> This is my first server</h1>")
    res.end();

}) ;

Myserver.listen(port, hostname, ()=> {
    console.log( ` here we can run at  http://${hostname}:${port}` )


});




