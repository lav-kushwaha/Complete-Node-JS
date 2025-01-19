const express = require("express");
const { userAuth } = require("../middleware/auth");

const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest",userAuth,(req,res,next)=>{
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

module.exports = {requestRouter};
