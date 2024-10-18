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

