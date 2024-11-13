console.log("Hello world");

var a = 1078698;
var b = 20986;

//This callback will only be pushed to stack in v8 once the call stack is empty.
setTimeout(()=>{
    console.log("Call me right now");  
},0) //trust issues with setTimeout

function multiplyFn(x,y){
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b);

console.log("Multiplication result is : ",c);