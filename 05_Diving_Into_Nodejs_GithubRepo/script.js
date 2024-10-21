//require("./xyz.js");
//all the code of the module is wrapped inside a IIFE function (IIFE)

//IIFE - immediately invoked function expression.

// (()=>{
//     console.log("Hello, Lav!");
// })();

//Q : How are variables & functions private in different modules.
//=>IIFE & require statement 
//require statement wrapped code inside a IIFE
//example :
/**
require("./sum.js");

(function(){

    //require statement wrapped sum.js module code inside IIFE
    function sum(a,b){
        const result = a + b;
        console.log(result);
    }

})();
*/

/*

Q : How do you get access to module.export and require ?

=> when our code is wrapped inside the IIFE functions.
=> Node js passes module as a parameter to the IIFE function.


(function(module,require){ //module and require coming from node or given by node.
    
    //accessing require 
    //require("./path");
    //require statement wrapped sum.js module code inside IIFE
    function sum(a,b){
        const result = a + b;
        console.log(result);
    }

    //accessing module.exports
    module.exports = {sum};

})();

=> Node js is wrapped all the code inside IIFE and it is passing module and require as a paramater inside it - 
that's the reason we are able to access module.exports and require inside file(module-script.js).
=>when node js wrapped all code inside IIFE and passed module as a parameter then these code goes to v8 engine.
=> v8 engine will execute code.
=> v8 engine is just a code written in c+ and is used in google chrome
Note : module or file (ex- script.js) code not directly passed inside the V8 first it's wrapped inside the IIFE

/*
#require("./path")

Steps : 

1. resolving the module
=>In the first step it see from where data is comming from, weather it is comming from node module, json file or localpath
and accordingly it resolves the module.
-> ./localpath
-> .json -> node:module

2. Loading the module
=> loads the file content according to file type - localmodule, json,utils.folder or node module

3. wraps inside the IIFE
4. code evolution - module.exports return to require whatever we exports.
5.(Imp) caching - here module is cache
*/
