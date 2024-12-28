const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://lavkushwaha:IN3Eea1Daov8k3a1@lavdb.dfcx5.mongodb.net/devTinder");
}

connectDB()
.then(()=>{
    console.log("Database connection established...");  
})
.catch((err)=>{
    console.error("Database connection cannot be established...",err);
})