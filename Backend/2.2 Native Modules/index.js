const fs = require("fs");

fs.writeFile("message2.txt", "Hello from NodeJS!", err => {
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("./message2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});