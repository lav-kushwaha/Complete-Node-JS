//Different ways of Exporting from this module.

// Modules are protected: their variables and functions do not leak into the global scope.

// Define a function to calculate the sum
function calculateSum(a, b) { 
    // If we want to access this function from another file, we must export it.
    // Then, we can import it in another module to use it.
    const sum = a + b;
    console.log(sum);
}

// Define a variable
var name = "Lav Kushwaha";

// Export the calculateSum function from the sum.js module

// Exporting multiple methods or variables by wrapping them inside an object.
//module.exports is the the empty object.
//ex - console.log(module.exports); //{}
module.exports = {
    name: name,
    calculateSum: calculateSum
};

// //we can also export like this.
// module.exports.name = name;
// module.exports.calculateSum = calculateSum;

// =================== OR ===================
// We can also export directly without repeating variable names if they match
module.exports = { name, calculateSum };
