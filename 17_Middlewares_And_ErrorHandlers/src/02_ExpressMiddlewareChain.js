const express = require("express");
const app = express();

// Case 1: 
// In this example, when we request the '/user' route, the first route handler will start executing code line by line and log "Handling the route user" to the console.
// Then, it will send a response with "Response 1" to the client. After that, the `next()` method is called, passing control to the next route handler.
// However, in the second route handler, it will try to log "Handling the route user" to the console and send another response with "Response 2".
// This will result in an error: [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client,
// because the response has already been sent by the first route handler. To avoid this, you should not send multiple responses for the same request.

// app.get('/user', (req, res, next) => {
//    // route handler 1
//    console.log("Handling the route user");
//    res.send("Response 1"); 
//    next();
// });

// app.get('/user', (req, res, next) => {
//    // route handler 2
//    console.log("Handling the route user");

//    // Error: [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//    res.send("Response 2");
// });


// Case 2:
// In this example, when we request the '/user' route, the first route handler (route handler 1) will execute.
// It logs "Handling the route user" to the console and then calls `next()`, which passes control to the next route handler.
// The second route handler (route handler 2) will then execute, logging "Handling the route user" to the console.
// After that, it sends the response "Response 2" to the client. 
// Since no response was sent in route handler 1 and `next()` was called, this code will work correctly without any errors.
// app.get('/user', (req, res, next) => {
//    // route handler 1
//    console.log("Handling the route user");
//    next(); // Pass control to the next route handler
// });

// app.get('/user', (req, res, next) => {
//    // route handler 2
//    console.log("Handling the route user");
//    res.send("Response 2"); // Send the response to the client
// });

// Case 3:
// In this example, when we request the '/user' route:
// - The first route handler (route handler 1) will execute. It logs "Handling the route user" to the console.
//   However, it does not call `next()` or send a response, so the request will not proceed to the next route handler (route handler 2).
//   This causes the request to hang, as the server neither sends a response nor moves to the next middleware.
// - Even if route handler 1 did call `next()`, the second route handler (route handler 2) would execute, logging "Handling the route user" and sending the response "Response 2" to the client.
//   After sending the response, the `next()` function is called, which is unnecessary and would cause an error if another middleware tries to modify the response after it has been sent.
// 
// To fix this issue:
// - Route handler 1 must call `next()` if it does not send a response.
// - In route handler 2, avoid calling `next()` after sending the response to prevent errors.
// app.get('/user', (req, res, next) => {
//    // route handler 1
//    console.log("Handling the route user");
//    // Missing `next()` here; request will hang
// });

// app.get('/user', (req, res, next) => {
//    // route handler 2
//    console.log("Handling the route user");
//    res.send("Response 2"); // Send the response to the client
//    next(); // Calling `next()` here is unnecessary and could cause an error
// });


// Case 4:
// In this example, when we request the '/user' route:
// - The first route handler (route handler 1) will execute. It logs "Handling the route user" to the console
//   and then calls `next()`, passing control to the next middleware or route handler.
// - The second route handler (route handler 2) will then execute. It also logs "Handling the route user" to the console
//   and calls `next()` again.
// - Since neither of the route handlers sends a response to the client, the request will hang, resulting in an 
//   unhandled response. This will eventually cause the server to time out.
//
// To fix this issue:
// - At least one of the route handlers must send a response to the client (e.g., using `res.send()` or `res.end()`).
// - Alternatively, if this chain of middlewares is intended to pass control to another middleware, ensure a response
//   is sent downstream in the chain.
// app.get('/user', (req, res, next) => {
//    // route handler 1
//    console.log("Handling the route user");
//    next(); // Pass control to the next middleware or route handler
// });

// app.get('/user', (req, res, next) => {
//    // route handler 2
//    console.log("Handling the route user");
//    next(); // Pass control to the next middleware or route handler, but no response is sent here
// });


// Case 5:
// In this example, when we request the '/user' route:
// - The first route handler (route handler 1) executes first. It logs "Handling the route user" to the console
//   and calls `next()`, passing control to the next route handler.
// - The second route handler (route handler 2) then executes. It logs "Handling the route user" to the console
//   and sends a response with "Response 2" to the client using `res.send()`.
// - After sending the response, the `next()` method is called. This is a mistake because:
//     1. Once a response has been sent to the client using `res.send()`, the middleware chain should terminate.
//     2. Calling `next()` after sending the response may lead to an error (`ERR_HTTP_HEADERS_SENT`), as subsequent
//        middlewares or handlers could attempt to send another response or modify the headers, which is not allowed.
//
// To fix this issue:
// - Remove the `next()` call in the second route handler after sending the response to avoid potential errors.
// app.get('/user', (req, res, next) => {
//    // route handler 1
//    console.log("Handling the route user");
//    next(); // Pass control to the next route handler
// });

// app.get('/user', (req, res, next) => {
//    // route handler 2
//    console.log("Handling the route user");
//    res.send("Response 2"); // Send the response to the client
//    next(); // This call is unnecessary and should be removed
// });


// Case 6:
// In this example, when we request the '/user' route:
// - The first route handler (route handler 1) executes. It logs "Handling the route user" to the console
//   and calls `next()`, passing control to the next route handler.
// - The second route handler (route handler 2) then executes. It logs "Handling the route user" to the console
//   but does not send a response to the client or call `next()` to pass control further.
// - As a result, the request will hang because no response is sent to the client, and the middleware chain does not terminate.
//
// To fix this issue:
// - The second route handler must either send a response to the client (e.g., using `res.send()` or `res.end()`)
//   or call `next()` to allow the request to proceed to another middleware or route handler.
//
// Corrected Code Example (to avoid hanging the request):
// app.get('/user', (req, res, next) => {
//    console.log("Handling the route user");
//    next(); // Pass control to the next route handler
// });
// 
// app.get('/user', (req, res, next) => {
//    console.log("Handling the route user");
//    res.send("Response from route handler 2"); // Send a response to the client
// });

app.get('/user', (req, res, next) => {
   // route handler 1
   console.log("Handling the route user");
   next(); // Pass control to the next route handler
});

app.get('/user', (req, res, next) => {
   // route handler 2
   console.log("Handling the route user");
   // No response sent, causing the request to hang
});


// Key Points to Remember :
// Always send a response (e.g., res.send()) or call next() in your middleware/route handlers.
// Do not call next() after sending a response with res.send() or res.end(), as this can cause errors (ERR_HTTP_HEADERS_SENT).
// Test your routes to ensure the middleware chain properly terminates and responses are sent to the client.


app.listen(3000,()=>{
    console.log("Server is listening successfully on 3000");
});