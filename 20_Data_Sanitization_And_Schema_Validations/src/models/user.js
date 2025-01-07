const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3, //for string we use minLength and maxLength
        maxLength:100,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,//for num we use min
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid!");
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png"
    },
    about:{
        type:String,
        default:"This is a default about of the user!"
    },
    skills:{
        type:[String],
    }
},
{
    timestamps:true,
});

// const User = mongoose.model("User",userSchema);

module.exports = mongoose.model("User",userSchema);