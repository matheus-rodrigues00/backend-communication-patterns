const fs = require("fs");
// The event loop moves on, doesn't wait the file to be read
fs.readFile(__dirname + "/lorem.txt", "utf8", (err, data) => {
    console.log(data);
});
console.log("Moving on, carring about my own business :D");
