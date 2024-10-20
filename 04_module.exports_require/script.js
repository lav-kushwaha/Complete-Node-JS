// const {sum} = require("./Calculate/sum");
// const {multiply} = require("./Calculate/multiply")

// const {sum,multiply} = require("./Calculate/index")
const {sum,multiply} = require("./Calculate"); //if we don't use index that is also fine. it will be works.

sum(10,40);
multiply(50,2);

//importing JSON file.
const JSON = require("./data.json");
console.log(JSON); //{ name: 'Lav Kushwaha', country: 'India' }

//Utils module.
const util = require("node:util");
console.log(util.isNumber("lav")); //false


