/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
    .prompt([{
        message : "Type the url:",
        name : "url",
    }])

    .then((answers) => {
        var url=answers.url;
        console.log(url);

        var qr_png = qr.image(url); 
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile("url.txt", url, (err) => {
            if(err) throw err;
            else console.log("file saved!");
        });
    })
