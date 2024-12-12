const express = require('express');
const app = express();


// Middleware that handles all requests to the root route ("/")
// The `app.use()` method is used to define a middleware function that matches all requests
// to the specified path ("/"). In this case, it handles the root path of the application.

// If we use a slash ("/") in `app.use()`, it will handle all requests to the root path and any subsequent paths.
// The middleware will catch requests that start with "/", and since it sends a response,
// the request-response cycle is completed here, and control will not pass to any subsequent route handler.
app.use("/",(req,res)=>{
    res.send("handle/route");
});

app.get("/user",(req,res)=>{
    console.log("Route handler 1");
    res.send("Response 1");
},(req,res)=>{
    console.log("Route handler 2");
    res.send("Response 2");
});

//This listen method accept the req from client side and then response to the client.
app.listen(3000,()=>{
    console.log("Server is listening successfully on 3000");
});