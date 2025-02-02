const express = require("express");
const {userAuth} = require("../middleware/auth");
const ConnectionRequest = require("../models/connectionRequest");
const userRouter = express.Router();

//Get all the pending connections request for the loggedIn user.
userRouter.get("/user/requests", userAuth, async (req,res)=>{
    try{
        const loggedInUser = req.user;
        //find returns array and findOne returns you an objects.
        const connectionRequests = await ConnectionRequest.find({
            toUserId : loggedInUser._id,
            status: "interested"
        }).populate("fromUserId",["firstName","lastName"]); //.populate("fromUserId");//if we will pass only fromUserId then we will get all the info of "fromUserId" which is Over-fetching data, and it is not good things to do, we have to explicitly mention in array to get data.
        //.populate("fromUserId","firstName lastName"); //we can write in the string also it is perfectly valid.

       res.json({
            message:"Data fetched successfully..",
            data:connectionRequests,
       });

    }catch(err){
        res.sendStatus(400).send("ERROR "+ err.message);
    }
});

module.exports = {userRouter};