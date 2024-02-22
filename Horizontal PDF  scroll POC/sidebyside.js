const PDFDocument = require('pdfkit');
const fs = require('fs');

const stream = fs.createWriteStream('horizontally_scrollable.pdf');

const doc = new PDFDocument({ size: [3000, 3000] }); // Adjust the size as needed
doc.pipe(stream);

// Content to be displayed side by side
const content = [
  'This is the first wide section of the document loerm243q2222222222222222222222222222222 bc   is dfsdhfasbdfaskbjbjbjbjbjbjbjbjbjbjbjbjbjbjbjbjbjbjbjaodshfasfoasffffffffffffffffffffffffffisnadsdsdsaASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASAS.',
 
  // Add more content sections as needed
];

const contentWidth = 4600; // Width of each content section

let x = 50; // Initial x-position

for (const section of content) {
  doc
    .text(section, x, 50, {
      width: contentWidth,
      align: 'left',
    })
    .moveDown(2); // Move down for the next section

  x += contentWidth + 50; // Adjust the x-position for the next section
}

doc.end();

console.log('Horizontally scrollable PDF created.');
