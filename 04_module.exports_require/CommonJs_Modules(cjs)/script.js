//Different ways of importing from this module.

// Importing one module into another
// require("./app.js"); 
// When we use require, all the code inside the app.js file (module) will execute first.

//====================================================================================================================
// require("./sum.js");

// We cannot access variables, methods, or functions from one module to another module 
// simply by requiring it without proper export in sum.js.
// calculateSum(20, 30); // ReferenceError: calculateSum is not defined

//====================================================================================================================

// const calculateSum = require("./sum.js"); 
// Imported the calculateSum function from the sum.js module.

// After exporting from the sum.js module and importing it into script.js, we can access the calculateSum function easily.
// calculateSum(20, 30);

//====================================================================================================================

// We can import multiple methods or variables using destructuring.
// const { calculateSum, name } = require("./sum.js"); // Imported calculateSum function and name from sum.js module.
// calculateSum(20, 30);
// console.log("script.js module created by:", name);

//=============== OR ===============
const obj = require("./sum.js");

obj.calculateSum(50, 50); // Calling the calculateSum function
console.log(obj.name); // Logging the imported 'name' variable

// Note: If there are variables or methods we don't need, we can skip importing them, and we can use the same variable names in the local module(script.js).
