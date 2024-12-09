const express = require("express");
const app = express();


//This will match all the HTTP method API calls to /test
//code order matters alot(IMP)
//callback function is known as route handlers
// app.use('/',(req,res)=>{
//     res.send("Hello world");
// });

//get - this will only handle GET call to /user
app.get('/user',(req,res)=>{
    res.send({firstName:"Lav", lastName:"Kushwaha"});
});


app.post('/user',(req,res)=>{
    //Saving data in database
    res.send("Data successfully saved to the database!");
});

app.delete('/user',(req,res)=>{
    //delete data in database 
    res.send("Data delete successfully saved to the database!");
});


//SOME ADVANCED ROUTING CONCEPTS :

//req.query - http://localhost:3000/userr?userId=101&password=testing
app.get("/userr",(req,res)=>{
    console.log(req.query); //req.query will read the query after "?".
    res.send("Hello, query");
});

//req.params (colon means dynamic routes)- http://localhost:3000/user/202/lav/1234
app.get("/user/:userID/:name/:password",(req,res)=>{
    //ex- { userID: '202', name: 'lav', password: '1234'}
    console.log(req.params); //req.params will read the parameters.
    res.send("Hello, params");
});

//works for - ab, ac - "b" is optional here.
app.get("/ab?c",(req,res)=>{
    res.send("Hello, ab?c");
});

//Here "bc" is optional
app.get("/a(bc)?d",(req,res)=>{
    res.send("Hello, a(bc)?d");
});

//Here we can write multiple "b" but in the starting of route url "a" and ending of route url "c" must be include.
app.get("/ab+c",(req,res)=>{
    res.send("Hello, ab+c");
});

//Here routing url start with "ab" and ends with cd and "*" means anything we can write btw ab and cd.
//ex - abLAVKUSHWAHAcd
app.get("/ab*cd",(req,res)=>{
    res.send("Hello, ab+c");
});

//regex /a/ - anywhere in the url if "a" comes it will work
app.get(/a/,(req,res)=>{
    res.send("Hello, regex");
});

//regex "*" means you can write anything but it ends with "fly".
app.get(/.*fly$/,(req,res)=>{
    res.send("Hello, fly");
});

//This listen method accept the req from client side and then response to the client.
app.listen(3000,()=>{
    console.log("Server is listening successfully on 3000");
});


