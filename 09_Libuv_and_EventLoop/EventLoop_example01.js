const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

//This readFile line of code execute in next cycle of event loop.
//This file reading will take some time to read file and execute.
fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");

// a=100
// Last line of the file.
// Timer expired
// setImmediate
// File Reading CB