const express = require("express");

const app = express();

app.use("/",(err,req,res,next)=>{
    if(err){
        //Log your error
        res.status(500).send("something went wrong!!");
    }
});

//always write a "err" in the starting.
app.get("/user",(err,req,res,next)=>{
    try{
        //Login of DB call and get user data
        res.send("Hello lav!");

        throw new Error("errr");
        res.send("user data sent!");
    }
    catch(err){
        res.status(500).send("Some Error contact support team")
    }
 
});

app.use("/",(err,req,res,next)=>{
    if(err){
        //Log your error
        res.status(500).send("something went wrong!!");
    }
});

app.listen(3000,()=>{
    console.log("server is running on port 3000.."); 
});