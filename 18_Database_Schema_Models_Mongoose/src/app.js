const express = require('express');
const connectDB = require("./config/database.js");

const app = express();

//connected to mongoDB
connectDB()
.then(()=>{
    console.log("Database connection established...");  

    //listening port on 3000
    app.listen(3000,()=>{
        console.log("Server is listening on port 3000..");
    });
})
.catch((err)=>{
    console.error("Database connection cannot be established...",err);
});

//get
app.get("/",(req,res)=>{
    res.send("Hello");
})




