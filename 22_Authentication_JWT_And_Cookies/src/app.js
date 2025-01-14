const express = require('express');
const connectDB = require("./config/database.js");
const app = express();
const User = require('./models/user.js');
const {validateSignUpData} = require("./Utils/validation.js");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userAuth} = require("./middleware/auth.js");

//it will works for all the route.
//express.json() middleware convert JSON code into JS Object. 
app.use(express.json());

//cookie parser middleware help to read cookies from client side.
app.use(cookieParser());

//Sign Up.
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

//login API.
app.post("/login",async(req,res)=>{
    try{
        const{emailId,password} = req.body;
        const user = await User.findOne({emailId:emailId});
        // console.log(user);
        
        if(!user){
            throw new Error("Invalid credentials..");
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            
            //create a JWT Token.
            const token = await user.getJWT();

            //Add the token to cookie and send the response back to the user.
            res.cookie("token",token,{ 
                expires: new Date(Date.now() + 900000)
            }); 

            res.send("Login successfully!!!");
        
        }else{
            throw new Error("Invalid credentials..");
        }

    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
});

//get profile.
app.get("/profile",userAuth,async(req,res)=>{
    try{
    const user = req.user;
    if(!user){
        throw new Error("Please login again");
    }
    res.send(user);
    }catch(err){
        res.status(400).send("ERROR:" + err.message);
    }
});

app.post("/sendConnectionRequest",userAuth,(req,res,next)=>{
    try{
        const user = req.user;
        if(!user){
            throw new Error("User not found");
        }
        res.send(user.firstName + "sent the connect request!");
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
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