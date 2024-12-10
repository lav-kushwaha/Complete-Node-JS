const express = require("express");
const app = express();


// This will match all the HTTP method API calls to /user
// code order matters a lot (IMP)
// user - route, callback - route handler
// there can be multiple route handlers

// Case 1: In this, when we request the /user route, it will call the first route handler
// which will execute and log to the console, and then res.send("Response!!") sends the response,
// and it won't move to the next route handler because the response has already been sent.

app.use('/user', (req, res) => {
    // route handler1
    console.log("Handling the route user");
    res.send("Response!!"); // Sends the response, so the next handler won't be executed
 }, (req, res) => {
     // route handler2
     console.log("Handling the route user2");
     res.send("Response 2"); // This won't be reached because the response has already been sent in handler1
 });


// Case 2: In this, when we request the /user route, it will call the first route handler
// which will execute and log to the console, and then res.send("Response!!") sends the response.
// Even though we explicitly call next(), the second route handler will not be executed
// because the response has already been sent in the first route handler.

app.use('/user', (req, res, next) => {
    // route handler1
    console.log("Handling the route user");
    res.send("Response!!"); 
    next(); // This will pass control to the next route handler, but it won't be executed because the response has already been sent
}, (req, res) => {
    // route handler2
    console.log("Handling the route user2");

    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    res.send("Response 2"); // This will NOT be reached because the response has already been sent in handler1
});


// Case 3: In this, when we request the /user route, the first route handler will log to the console and
// explicitly call `next()`, which passes control to the second route handler. 
// The second route handler executes first and successfully sends a response with `res.send("Response 2")`.
// However, since `res.send("Response!!")` is called after `next()`, the first handler attempts to send the response
// after the second handler has already completed the response cycle, resulting in an error.

app.use('/user', (req, res, next) => {
    // route handler1
    console.log("Handling the route user");
    next(); // This passes control to the second route handler

    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    res.send("Response!!"); // This sends the response, but will cause an error because the response cycle is already completed and sent once
}, (req, res) => {
    // route handler2
    console.log("Handling the route user2");
    res.send("Response 2"); // This will be sent first, and then handler1 will fail when trying to send another response
});

// Case 4: In this, when we request the /user route, it will call the first route handler
// which will execute and log to the console, and we are not sending any response from the first route handler.
// The question is: will it go to the next route handler? No, it won't go to the next route handler
// unless we explicitly call `next()` to pass control to the next handler.

app.use('/user', (req, res) => {
    // route handler1
    console.log("Handling the route user");
}, (req, res) => {
    // route handler2
    console.log("Handling the route user2");
    res.send("Response 2"); // This won't be reached because we have not used next() to pass control to the next handler
});

// Case 5: In this, when we request the /user route, it will call the first route handler
// which will execute and log to the console, and we are not sending any response from the first route handler.
// The question is: will it go to the next route handler? Yes, it will go to the next route handler
// because we explicitly call next() to pass control.

app.use('/user', (req, res, next) => {
    // route handler1
    console.log("Handling the route user");
    next(); // This will pass control to the next route handler
}, (req, res) => {
    // route handler2
    console.log("Handling the route user2");
    res.send("Response 2"); // This will be reached because `next()` was called in handler1
});


// Key Points:
// 1. Once `res.send()` is called, the response is sent, and no more route handlers are executed unless you call `next()` explicitly.
// 2. You should only send one response per request to avoid errors. Calling `res.send()` multiple times will result in an error.
// 3. If you don't call `next()` in a route handler, the request will not proceed to the next handler, and the response will not be sent until `next()` is called or you send a response in the current handler.

//This listen method accept the req from client side and then response to the client.
app.listen(3000,()=>{
    console.log("Server is listening successfully on 3000");
});


