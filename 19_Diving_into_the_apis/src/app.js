const express = require('express');
const connectDB = require("./config/database.js");
const User = require('./models/user.js');
const app = express();

//it will works for all the route.
//express.json() middleware convert JSON code into JS Object. 
app.use(express.json());

app.post("/signup", async(req,res)=>{
    console.log(req.body);

    //creating a new instance of the user model.
    const userInstance = new User(req.body);

    try{
        await userInstance.save();
        res.send("User added successfully...");
    }
    catch(err){
        res.status(400).send("Error saving the user:"+ err.message)
    }
   
});

//connected to mongoDB.
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




