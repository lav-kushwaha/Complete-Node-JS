const express = require('express');
const connectDB = require("./config/database.js");

const app = express();

//connected to db
connectDB()
.then(()=>{
    console.log("Database connection established...");  
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




