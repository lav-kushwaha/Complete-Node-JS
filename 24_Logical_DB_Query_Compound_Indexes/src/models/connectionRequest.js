const moongoose = require('mongoose');

const connectionRequestSchema = new moongoose.Schema({
    
    fromUserId:{
        //Type object user ID.
        type:moongoose.Schema.Types.ObjectId,
        required: true,
    },
    toUserId:{
        type:moongoose.Schema.Types.ObjectId,
        required: true,
    },
    status:{
        type:String,
        //enum are use to restrict value for some users.
        enum:{
            values:["ignored","interested","accepeted","rejected"],
            message:`{VALUE} is incorrrect status type`
        }
    }
});

//whenever save method will called, it will pre saved.
//Before we save it, pre function will be called.
connectionRequestSchema.pre("save",function(next){
    const connectionRequest = this;
    //CHECK IF THE fromUserid AS SAME AS toUserid.
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("Cannot send connection request to yourself!")
    }
    next();
});



//model always start with a capital letter.
const ConnectionRequestModel = new moongoose.model('ConnectionRequestModel',connectionRequestSchema);

module.exports = ConnectionRequestModel; 