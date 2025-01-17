const express = require("express");
const { userAuth } = require("../middleware/auth");
const profileRouter = express.Router();

//get profile.
profileRouter.get("/profile",userAuth,async(req,res)=>{
    try{
    //req.user - user data we are getting from userAuth.
    const user = req.user;
    if(!user){
        throw new Error("Please login again");
    }
    res.send(user);
    }catch(err){
        res.status(400).send("ERROR:" + err.message);
    }
});

module.exports = {profileRouter};