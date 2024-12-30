const express = require('express');
const connectDB = require("./config/database.js");

const app = express();

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

app.get("/",(req,res)=>{
    res.send("Hello");
})




