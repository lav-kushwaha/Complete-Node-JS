const express = require("express");
const app = express();


//This will match all the HTTP method API calls to /test
//order matter alot
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


//This listen method accept the req from client side and then response to the client.
app.listen(3000,()=>{
    console.log(`Server is listening successfully on 3000`);
});


