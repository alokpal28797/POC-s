const PDFDocument = require('pdfkit');
const fs = require('fs');

// Adjust the page size to accommodate wide content
const doc = new PDFDocument({ layout: 'landscape', size: [1200, 800] });
const stream = fs.createWriteStream('horizontally_scrollable.pdf');

// Pipe the PDF content to a file
doc.pipe(stream);

// Set the document title and author (optional)
doc.info.Title = 'Horizontally Scrollable PDF';
doc.info.Author = 'Your Name';

// Content to be displayed horizontally with increased width
doc.text('This is the first wide section of the document.', {
  width: 1200, // Increase the width of the text block
  align: 'center', // Alignment (optional)
});

doc.text('This is the second wide section of the document.', {
  width: 1200, // Increase the width of the text block
  align: 'center',
});

// End the document
doc.end();

console.log('Horizontally scrollable PDF created.');
