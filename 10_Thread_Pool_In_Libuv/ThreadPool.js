const fs = require("fs");
const crypto = require("crypto");

//changing thread pool size
process.env.UV_THREADPOOL_SIZE = 2;

//every crypto is assign one thread pool and there are total 4 thread, but when we use more than 4 crypto.
//then it will wait for one thread to be execute and empty, then other crypto assign to empty thread and execute.
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1 - cryptoPBKDF2 done");
});

// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("2 - cryptoPBKDF2 done");
// });

// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("3 - cryptoPBKDF2 done");
// });

// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("4 - cryptoPBKDF2 done");
// });

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("5 - cryptoPBKDF2 done");
});

