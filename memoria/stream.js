const fs = require("fs");

let data = "";

let readableStream = fs.createWriteStream(__dirname + "/input.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk).toString;
});


