const express = require("express");
const app = express();


app.get('/user', (req, res,next) => {
    // route handler1
    console.log("Handling the route user");
    // res.send("Response!!"); 
    next();
 });

 app.get('/user', (req, res, next) => {
    // route handler1
    console.log("Handling the route user");
    // res.send("Response2");
    next();
 });


 app.listen(3000,()=>{
    console.log("Server is listening successfully on 3000");
});