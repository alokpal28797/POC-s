const PDFDocument = require('pdfkit');
const fs = require('fs');

const stream = fs.createWriteStream('horizontally_scrollable_with_table.pdf');

const doc = new PDFDocument({ size: [3000, 3000] }); // Adjust the size as needed
doc.pipe(stream);

// Create your table data
const tableData = [
  ['gross-wage', 'vacation/pto', 'vacation/pto', 'Header 4'],
  ['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3', 'Row 1, Col 4'],
  ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3', 'Row 2, Col 4'],
  // Add more rows as needed
];

const cellWidth = 400; // Width of each cell

// Function to draw a table
function drawTable(table, x, y) {
  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    for (let j = 0; j < row.length; j++) {
      doc
        .text(row[j], x + j * cellWidth, y + i * 20, { width: cellWidth, align: 'left' });
    }
  }
}

// Adjust the coordinates for the table's position
const tableX = 50;
const tableY = 100;

drawTable(tableData, tableX, tableY);

doc.end();

console.log('Horizontally scrollable PDF with a table created.');
