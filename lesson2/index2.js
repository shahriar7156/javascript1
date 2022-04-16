/*

const shihab = require('fs');
shihab.writeFile('demo1.txt', "Here is another text my name is shihab" , (error)=>{

    if  (error) {
        console.log("here is error");
    }
    else {
        console.log("sucessful");
    }

   
}); 
*/

/*
////for delete file
const shihab = require('fs');
shihab.unlink('demo1.txt' , (error)=>{

    if  (error) {
        console.log("here is error");
    }
    else {
        console.log("sucessful");
    }

   
}); 
*/

 /*

const shihab = require('fs');
shihab.rename('demo1.txt', 'demo2.txt' , (error)=>{

    if  (error) {
        console.log("here is error");
    }
    else {
        console.log("sucessful");
    }

   
}); */

const shihab=require('fs');
shihab.readFile('demo1.txt','utf-8', (error, data)=>
{
    if (error){
        console.log(error);
    }
    else{
        console.log(data);
    }


});