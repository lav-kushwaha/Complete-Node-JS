const express = require('express');
const connectDB = require("./config/database.js");
const User = require('./models/user.js');
const {validateSignUpData} = require("./Utils/validation.js");
const bcrypt = require('bcrypt');

const app = express();

//it will works for all the route.
//express.json() middleware convert JSON code into JS Object. 
app.use(express.json());

//Sign Up
app.post("/signup", async(req,res)=>{
    try{
    //validation of data
    validateSignUpData(req);

    const {firstName, lastName, emailId, password} = req.body;
    
    //Encrypt the password.
    const passwordHash = await bcrypt.hash(password,10);
    console.log(passwordHash);
    
    //creating a new instance of the user model.
    const userInstance = new User({firstName,lastName,emailId,password:passwordHash});
        await userInstance.save();
        res.send("User added successfully...");
    }
    catch(err){
        res.status(400).send("ERROR : " + err.message);
    }
   
});

//login API
app.post("/login",async(req,res)=>{
    try{
        const{emailId,password} = req.body;
        const user = await User.findOne({emailId:emailId});
        if(!user){
            throw new Error("Invalid credentials..");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            res.send("Login successfully!!!")
        }else{
            throw new Error("Invalid credentials..")
        }

    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
})

//find user through emailID.
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
        res.status(400).send("something went wrong.."+ err.message);
    }
});

//Feed API - GET /user - get all the users from the database.
//find all user documents.
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
});

//find one user documents by email.
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

//findByIdAndDelete() user from documents.
//Delete a user from a database.
app.delete("/user",async(req,res)=>{
    const userID = req.body.userId;
    try{
        // const user = await User.findByIdAndDelete({_id:userID});
        const user = await User.findByIdAndDelete({userID});
        res.send(user);
        res.send("Deleted Successfully...");
    }catch(err){
        res.status(400).send("Something went wrong...");
    }
});

//Update data of the user
app.patch("/user/:userId",async(req,res)=>{
    const userId = req.params?.userId;
    const data = req.body;
    try{
        //schema validations
        const ALLOWED_UPDATES = [
            "photoUrl",
            "about",
            "gender",
            "age",
            "skills",
        ];

        const isUpdatedAllowed = Object.keys(data).every((k)=>
            ALLOWED_UPDATES.includes(k)
        );

        if(!isUpdatedAllowed){
            throw new Error("update not allowed..");
        }

        if(data?.skills.length>10){
            throw new Error("Skills cannot be more than 10");
        }

        const user = await User.findByIdAndUpdate(userId,data,{
            returnDocument:"after",
            runValidators:true
        });

        console.log(user);
        res.send("User updated successfully..");

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