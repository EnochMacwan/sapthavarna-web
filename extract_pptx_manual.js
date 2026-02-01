const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const pptxFile = 'AI guidelines SapthaVarnah Website.pptx';
const pptxPath = path.join(__dirname, pptxFile);

try {
    const zip = new AdmZip(pptxPath);
    const zipEntries = zip.getEntries();
    
    let allText = '';

    // Sort entries to process slides in order
    // Valid slides in ppt/slides/slide1.xml, slide2.xml etc.
    const slides = zipEntries.filter(entry => entry.entryName.match(/ppt\/slides\/slide\d+\.xml/));
    
    // Sort by slide number
    slides.sort((a, b) => {
        const numA = parseInt(a.entryName.match(/slide(\d+)\.xml/)[1]);
        const numB = parseInt(b.entryName.match(/slide(\d+)\.xml/)[1]);
        return numA - numB;
    });

    if (slides.length === 0) {
        console.log("No slides found in PPTX structure.");
    }

    slides.forEach(slide => {
        console.log(`Processing ${slide.entryName}...`);
        const xmlContent = slide.getData().toString('utf8');
        
        // Simple regex to extract text between tags (e.g. <a:t>Text</a:t>)
        // In PPTX XML, text is usually in <a:t>
        const textMatches = xmlContent.match(/<a:t.*?>(.*?)<\/a:t>/g);
        
        if (textMatches) {
            const slideText = textMatches.map(t => {
                // Remove tags
                return t.replace(/<.*?>/g, '');
            }).join(' ');
            
            allText += `\n--- SLIDE ${slide.entryName} ---\n` + slideText + '\n';
        }
    });

    console.log("Extraction complete.");
    fs.writeFileSync('pptx_manual_extract.txt', allText);
    console.log("Saved to pptx_manual_extract.txt");

} catch (e) {
    console.error("Error unzipping/parsing:", e);
}
