const fs  = require("fs");
const http= require("http");
const PORT=3000;
const hostname= "127.0.0.1";

const server= http.createServer((req,res)=>{
const handlefunction=(filename,number)=>


    fs.readFile(filename, (err,data)=>
      {

        res.writeHead(number,{ "Content-Type": "text/html"});
        res.write(data);
        res.end();
      });



   if (req.url==='/'){
     handlefunction("./index.html",200);
      
   }

   else if (req.url==='/about')
   {
    handlefunction("./about.html",200);
      /* fs.readFile("about.html",(err,data)=>
       {
           res.writeHead(200,{"Content-type": "text/html"});
           res.write(data);
           res.end();
       });
       */
   }
   else if (req.url==='/contact')
   {
       handlefunction("./contact.html",200)
   }
   else {
       handlefunction("./error.html",404)
       }
   

});
server.listen(PORT, hostname, ()=>
{
    console.log(`Server is running at http://${hostname}:${PORT}`);
});