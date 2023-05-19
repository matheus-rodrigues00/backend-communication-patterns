// Here's an example of opening a file syncronously
const fs = require("fs");

// Open the file synchronously
const data = fs.readFileSync(__dirname + "/lorem.txt", "utf8");
console.log(data);

console.log("We only get here after reading the file!");
