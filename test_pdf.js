const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('AI Company Profile SapthaVarnah.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_content.txt', data.text);
    console.log("PDF extracted to pdf_content.txt");
}).catch(err => {
    console.error("PDF Error:", err);
});
