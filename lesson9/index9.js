const app= require ('./app');
const PORT = 3000;


app.get("/",(req,res)=>
{
    res.send("I am a get request at home route");
})

app.get("/about",(req,res)=>
{
    res.send("I am a get request at about route");
})
app.post("/", (req,res)=>{
    res.send("I am in post req at home route");

})

app.put("/", (req,res)=>{
    res.send("I am in put req at home route");

})
app.delete("/", (req,res)=>{
    res.send("I am in delete req at home route ");

})

app.listen(PORT, () => {

    console.log(`server is running at http://localhost:${PORT}); `)

});