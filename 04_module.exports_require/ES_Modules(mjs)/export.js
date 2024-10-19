//Different ways of Exporting from this module.

// Modules are protected: their variables and functions do not leak into the global scope.

// Define a function to calculate the sum
export function calculateSum(a, b) { 
    // If we want to access this function from another file, we must export it.
    // Then, we can import it in another module to use it.
    const sum = a + b;
    console.log(sum);
}

export const name = "Lav Kushwaha";


// 1. Exporting from a Module
// You can export variables, functions, or classes from a module using the export keyword.
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

//2. Default Exports
//A module can also export a single value or function as the default export.
const greet = (name) => `Hello, ${name}!`;
export default greet;




