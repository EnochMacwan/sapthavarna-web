const fs = require('fs');
const path = require('path');
const officeParser = require('officeparser');

const filePath = path.join(__dirname, 'AI guidelines SapthaVarnah Website.pptx');

officeParser.parseOffice(filePath, (err, data) => {
    let output = '';
    output += "Reading file: " + filePath + "\n";

    if (err) {
        output += "DEBUG: Error detected.\n";
        output += "Error string: " + err.toString() + "\n";
        
        if (data) {
            output += "DEBUG: Data was returned despite error.\n";
        } else {
             output += "DEBUG: No data returned.\n";
        }
    } else {
        output += "DEBUG: Success.\n";
    }

    if (data) {
         if (typeof data === 'string') {
            output += data;
        } else {
            output += "Data is object/array. Extracting...\n";
            output += extractTextFromStructure(data);
            output += "\n--- RAW STRUCTURE START ---\n";
            output += JSON.stringify(data, null, 2).substring(0, 5000); // Limit size
             output += "\n--- RAW STRUCTURE END ---\n";
        }
    }
    
    fs.writeFileSync('pptx_content.txt', output);
    console.log("Written to pptx_content.txt");
});

function extractTextFromStructure(node) {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractTextFromStructure).join('\n');
    
    let text = '';
    // Some parsers use 'text', others might use different keys. 
    // Console log the keys of the first non-trivial object
    
    if (node.text && typeof node.text === 'string') text += node.text;
    
    if (node.children) {
        const childText = extractTextFromStructure(node.children);
        if (childText) text += '\n' + childText;
    }
    
    // Check for other common keys if 'text' isn't the only one, e.g. 'content'
    if (!text && !node.children) {
        // leaf node without 'text'?
        // JSON.stringify it to see
    }
    
    return text;
}
