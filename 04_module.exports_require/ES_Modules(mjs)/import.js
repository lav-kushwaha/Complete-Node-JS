import { calculateSum,name } from "./export.js";

calculateSum(30,50);
console.log(name);


//Importing a Module
//To use the exported members in another module, you use the import statement.
import { add, subtract } from './export.js';
const sum = add(5, 3);           // 8
const difference = subtract(5, 3); // 2

//Importing a Default Export:
import greet from './export.js';
console.log(greet('Lav')); // Output: Hello, Lav!

//Importing All Exports :
// Import everything as an object.
import * as utils from './export.js';
console.log(utils.add(2, 3)); // 5


//NOTE : 
// Running ES Modules
// - Use `.mjs` extension or set `"type": "module"` in `package.json`.

// {
//   "type": "module"
// }
