const express = require('express');
const connectDB = require("./config/database.js");
const User = require('./models/user.js');
const app = express();

//it will works for all the route.
//express.json() middleware convert JSON code into JS Object. 
app.use(express.json());

app.post("/signup", async(req,res)=>{
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

//Feed API - GET /user - get all the users from the database.
//find user through emailID
app.get("/user",async(req,res)=>{
    const userEmail = req.body.emailId;
    try{
       const user = await User.find({emailId:userEmail});
       if(user.length==0){
        res.status(404).send("user not found");
       }else{
        res.send(user);
       }

    }catch(err){
        res.status(400).send("something went wrong.."+err.message);
    }
});

//find all user documents
app.get("/feed",async(req,res)=>{
    try{
        const allUser = await User.find({});
        res.send(allUser);

        if(allUser.length===0){
            res.status(404).send("All user not found..");
        }else{
            res.send(allUser);
        }
    }catch(err){
        res.status(400).send("Something went wrong..");
    }
})

//find one user documents by email
app.get("/userOne",async(req,res)=>{
    const emailId = req.body.emailId;
    try{
        const user = await User.findOne({emailId:emailId});
        res.send(user);

        if(!user){
            res.status(404).send("user not found..");
        }else{
            res.send(user);
        }
    }catch(err){
        res.status(400).send("Something went wrong..");
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




