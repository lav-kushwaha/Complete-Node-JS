// name = "lav kushwaha"  // This will throw an error, ReferenceError: name is not defined, in ES modules because strict mode is enabled by default.

// name = "lav kushwaha"  // This will not throw an error in CommonJS modules (Node.js default), as strict mode is not enabled by default.

console.log("lav");

//Note :

// In ES modules, strict mode is enforced by default, so using undeclared variables (e.g., name = "lav") throws a ReferenceError.
// In CommonJS modules (Node.js default), strict mode isn't enabled automatically, so the same code won't throw an error.

//Fix for ES modules: Declare variables explicitly using let, const, or var:

let name = "lav kushwaha";  // No error in strict mode
console.log("lav");