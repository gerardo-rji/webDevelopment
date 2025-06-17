/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from "@inquirer/prompts";
import * as qr from "qr-image";
import * as fs from "fs"


const url = await input({message: "Enter your url:"});

let qrPng = qr.image(url, {type: 'png'});
qrPng.pipe(fs.createWriteStream("qr.png"));

fs.writeFile("url2.txt", url, err => {
    if (err) throw err;
    console.log("url saved!");
})