const crypto = require("node:crypto");

console.log("Hello, Lav!");

var a = 1078698;
var b = 20986;

//it will block the main thread.
//Synchronous Function - will block the main thread - don't use it.
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("First key is generated");


//password based key derivatives functions.
crypto.pbkdf2("password","salt",5000,50,"sha512",(res)=>{
    console.log("Second Key is generated");
});

function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);
console.log("Multiplication result is :",c);

