const http= require ('http');
const port=3000;
const hostname= '127.0.0.1'


const Myserver= http.createServer((req,res)=>{

 res.end("<h1>Shihab this is your second2 server </h1>");
 
}) ;
Myserver.listen(port,hostname ,()=>{


    console.log(`server is running successfully at http://${hostname}:${port} `);
    
});