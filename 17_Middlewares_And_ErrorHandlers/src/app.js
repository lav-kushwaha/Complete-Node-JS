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
//#Authorization :

//Handle auth middleware for all GET, POST, PUT, DELETE.
//app.use() and app.all() works for all - for eg - GET, POST, PUT and DELETE.

// Example 1 (v.v.v.imp): Middleware for routes starting with "/admin"

const {adminAuth,userAuth} = require("./middleware/auth.js")

// Middleware for only admin authorization
app.use("/admin",adminAuth);

// Routes under "/admin"
app.get("/admin/getAllData", (req, res) => {
    // When this route is requested, the admin authorization middleware will first check if the request is authorized
    res.send("All data sent!!");
});

app.get("/admin/deleteUser", (req, res) => {
    // When this route is requested, the admin authorization middleware will first check if the request is authorized
    res.send("User deleted!!");
});

/*
Explanation of Example 1:
- The `app.use("/admin")` middleware is applied to all routes starting with `/admin`.
- Therefore, for requests like `/admin/getAllData` or `/admin/deleteUser`, the middleware will run first.
- If the admin is not authorized (i.e., the token does not match), the request will return a `401 Unauthorized` response and will not proceed to the route handler.
- If the admin is authorized, the `next()` function will pass the control to the corresponding route handler.
*/

// Example 2 (v.v.v.imp): Middleware for "/admin" routes but not affecting unrelated routes

// Middleware for admin authorization
app.use("/admin", (req, res, next) => {
    console.log("Admin auth is being checked!!");

    const token = "lav"; // Hardcoded Authorization Token for simplicity

    // Check if the token matches the expected value
    const isAdminAuthorized = token === "lav";

    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request!!"); // If not authorized, return 401 status
    }
    next(); // If authorized, pass control to the next middleware or route handler
});

// Routes that DO NOT start with "/admin"
app.get("/user", userAuth, (req, res) => {
    // This route does not start with "/admin", so the admin authorization middleware will NOT be executed
    res.send("All user data sent!!");
});

/*
Explanation of Example 2:
- The `app.use("/admin")` middleware is only applied to routes that start with `/admin`.
- In this case, the `/user` route does not match the `/admin` prefix, so the admin authorization middleware will not run.
- This means requests to `/user` will directly execute the route handler without being checked for admin authorization.
*/

// Server listener
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});