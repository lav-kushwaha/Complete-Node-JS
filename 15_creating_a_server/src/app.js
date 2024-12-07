const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Hello world!");
});

//get 
app.get('/lav',(req,res)=>{
    res.send("Lav kushwaha");
});

app.listen(3000,()=>{
    console.log(`Server is listening successfully on 3000`);
});


