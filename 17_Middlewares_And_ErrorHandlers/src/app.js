const express = require('express');
const app = express();


// Middleware that handles all requests to the root route ("/")
// The `app.use()` method is used to define a middleware function that matches all requests
// to the specified path ("/"). In this case, it handles the root path of the application.

// If we use a slash ("/") in `app.use()`, it will handle all requests to the root path and any subsequent paths.
// The middleware will catch requests that start with "/", and since it sends a response,
// the request-response cycle is completed here, and control will not pass to any subsequent route handler.
// app.use("/",(req,res,next)=>{
//     res.send("handle/route");
        // next()
// });

// app.get(
//     "/user",
//     (req,res,next)=>{//middleware
//     console.log("Route handler 1");
//     next();
// },(req,res,next)=>{//middleware
//     next();
// },
// (req,res)=>{//request handler bcs its sending the data back!
//     console.log("Route handler 2");
//     res.send("Response!!");
// });


//Note : main job of server is to sending the data back or response to the client.

//=======================================================================================================================================================================================================================================================

//Handle auth middleware for all GET, POST, PUT, DELETE.
//app.use() and app.all() works for all - for eg - GET, POST, PUT and DELETE.

//Examples :

app.use("/admin",(req,res,next)=>{
    const token = "xyz";
    const isAdminAuthorized = token ==="yz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized!!");
    }else{
        next(); //it will passed the control to the next middleware if admin is authorized.
    }
});

app.get("/admin/getAllData",(req,res)=>{
    //Login of checked if request is authorized.
    const token = "xyz";
    const isAdminAuthorized = token ==="yz";
    if(isAdminAuthorized){
        res.send("get your data"); //by default status code is 200(Ok)
    }else{
        res.status(401).send("Unauthorized request!!!"); //401 - Unauthorized
    }
});

app.get("/admin/deleteUser",(req,res)=>{
    //Login of checked if request is authorized.
    const token = "xyz";
    const isAdminAuthorized = token ==="yz";
    if(isAdminAuthorized){
        res.send("get your data"); //by default status code is 200(Ok)
    }else{
        res.status(401).send("Unauthorized request!!!"); //401 - Unauthorized
    }
});



//This listen method accept the req from client side and then response to the client.
app.listen(3000,()=>{
    console.log("Server is listening successfully on 3000");
});