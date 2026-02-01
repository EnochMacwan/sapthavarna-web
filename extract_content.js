const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');
const officeParser = require('officeparser');

const files = [
    'AI Company Profile SapthaVarnah.pdf',
    'AI guidelines SapthaVarnah Website.pptx',
    'AI suggestions tagline SapthaVarnah.docx',
    'AI suggestions website SapthaVarnah.docx'
];

async function extractText() {
    let fullOutput = '';
    
    for (const file of files) {
        let fileOutput = `\n\n================================================================================\n=== START FILE: ${file} ===\n================================================================================\n`;
        const filePath = path.join(__dirname, file);
        try {
            if (file.endsWith('.pdf')) {
                const dataBuffer = fs.readFileSync(filePath);
                try {
                    // pdf-parse usage: require('pdf-parse') returns a promise-returning function?
                    // actually it returns a function that takes buffer and returns promise.
                    // If it failed saying 'pdf is not a function', maybe it was imported wrong or something.
                    // Let's rely on standard usage.
                    const data = await pdf(dataBuffer);
                    fileOutput += data.text;
                } catch (e) {
                    fileOutput += "PDF Parse INFO: " + e.message + " " + (typeof pdf);
                }
            } else if (file.endsWith('.docx')) {
                try {
                    const result = await mammoth.extractRawText({path: filePath});
                    fileOutput += result.value;
                } catch (e) {
                    fileOutput += "Mammoth error: " + e.message;
                }
            } else {
                // For PPTX
                 try {
                    const data = await new Promise((resolve, reject) => {
                        officeParser.parseOffice(filePath, (err, data) => {
                             if (err && !data) reject(err); 
                             else resolve(data);
                        });
                    });
                    
                    if (typeof data === 'string') {
                        fileOutput += data;
                    } else {
                         fileOutput += extractTextFromStructure(data);
                    }
                } catch(err) {
                     fileOutput += 'Officeparser error: ' + err;
                }
            }
        } catch (error) {
            fileOutput += `Error reading ${file}: ` + error;
        }
        fileOutput += `\n=== END FILE: ${file} ===\n`;
        fullOutput += fileOutput;
    }
    
    fs.writeFileSync('extracted_text.txt', fullOutput);
    console.log("Extraction complete. Written to extraction_text.txt");
}

function extractTextFromStructure(node) {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractTextFromStructure).join('\n');
    let text = '';
    if (node.text) text += node.text;
    if (node.children) {
        const childText = extractTextFromStructure(node.children);
        if (childText) text += '\n' + childText;
    }
    return text;
}

extractText();
