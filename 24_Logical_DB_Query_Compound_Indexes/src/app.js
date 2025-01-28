const express = require('express');
const connectDB = require("./config/database.js");
const app = express();
const cookieParser = require("cookie-parser");
const { authRouter } = require('./routes/auth.js');
const { profileRouter } = require('./routes/profile.js');
const {requestRouter} = require("./routes/request.js");

//it will works for all the route.
//express.json() middleware convert JSON code into JS Object. 
app.use(express.json());

//cookie parser middleware help to read cookies from client side.
app.use(cookieParser());

app.use("/",authRouter,profileRouter,requestRouter)

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