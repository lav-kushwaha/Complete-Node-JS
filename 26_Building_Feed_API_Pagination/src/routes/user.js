const express = require("express");
const {userAuth} = require("../middleware/auth");
const ConnectionRequest = require("../models/connectionRequest");
const userRouter = express.Router();

const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills";
//Get all the pending connections request for the loggedIn user.
userRouter.get("/user/requests", userAuth, async(req,res)=>{
    try{

        const loggedInUser = req.user;
        //find returns array and findOne returns you an objects.
        const connectionRequests = await ConnectionRequest.find({
            toUserId : loggedInUser._id,
            status: "interested"
        }).populate("fromUserId",USER_SAFE_DATA); //.populate("fromUserId");  //if we will pass only fromUserId then we will get all the info of "fromUserId" which is Over-fetching data, and it is not good things to do, we have to explicitly mention in array or string to get data.
        //.populate("fromUserId","firstName lastName"); //we can write in the string also it is perfectly valid.

       res.json({
            message:"Data fetched successfully..",
            data:connectionRequests,
       });

    }catch(err){
        res.sendStatus(400).send("ERROR "+ err.message);
    }
});

userRouter.get("/user/connections/", userAuth, async(req,res)=>{
    try{
        const loggedInUser = req.user;
        const connectionRequests = await ConnectionRequest.find({
            $or:[
                {toUserId:loggedInUser._id, status:"accepted"},
                {fromUserId:loggedInUser._id, status:"accepted"},
            ],
        })
        .populate("fromUserId", USER_SAFE_DATA)
        .populate("toUserId", USER_SAFE_DATA);

        const data = connectionRequests.map((row)=>{
            if(row.fromUserId._id.toString() === loggedInUser._id.toString()){
                return toUserId;
            }
            return row.fromUserId
        });

        res.json({
            data : data
        });

    }catch(err){
        res.sendStatus(400).send("ERROR "+err.message);
    }
})

userRouter.get("/feed",userAuth, async(req,res)=>{
    try{
        //user should see all the user cards except
        //0. his own card
        //1. his connections
        //2. ignored people
        //3. already sent the connections request
        
        //Example : Rahul = [mark,donald,ms dhoni,virat]
        //R->akshay->rejected   R->Elon->Accepted
        //A ->cant see rahul
        //you can only see people whos card you have never seen before also u cant see yourself also.

    }catch(err){
        res.status(400).json({message:err.message});
    }
});

module.exports = {userRouter};