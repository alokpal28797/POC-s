const PDFDocument = require('pdfkit');
const fs = require('fs');

function mapJSONDataToArray(jsonData) {
  const headers = Object.keys(jsonData[0]);
  const dataArray = [headers];

  for (const obj of jsonData) {
    const values = headers.map(key => obj[key]);
    dataArray.push(values);
  }

  return dataArray;
}

const jsonData = [{
    "gross-wage": 1,
    "vacation/pto": 1,
    "total-salary": 1,
    "health-insurance": 1,
    "retirement": 1,
    "worker's-comp": 1,
    "total-fringe": 1,
    "fica": 1,
    "sui": 1,
    "total-payroll-taxes": 1,
    "employee-name": "Fredrick",
    "customer-name": "Fredrick Muttitt",
    "class-name": "Muttitt",
    "total-hours": "fmuttitt0",
    "allocation": "fmuttitt0"
}, {
    "gross-wage": 2,
    "vacation/pto": 2,
    "total-salary": 2,
    "health-insurance": 2,
    "retirement": 2,
    "worker's-comp": 2,
    "total-fringe": 2,
    "fica": 2,
    "sui": 2,
    "total-payroll-taxes": 2,
    "employee-name": "Derrek",
    "customer-name": "Derrek Lorent",
    "class-name": "Lorent",
    "total-hours": "dlorent1",
    "allocation": "dlorent1"
}, {
    "gross-wage": 3,
    "vacation/pto": 3,
    "total-salary": 3,
    "health-insurance": 3,
    "retirement": 3,
    "worker's-comp": 3,
    "total-fringe": 3,
    "fica": 3,
    "sui": 3,
    "total-payroll-taxes": 3,
    "employee-name": "Scott",
    "customer-name": "Scott Bostock",
    "class-name": "Bostock",
    "total-hours": "sbostock2",
    "allocation": "sbostock2"
}, {
    "gross-wage": 4,
    "vacation/pto": 4,
    "total-salary": 4,
    "health-insurance": 4,
    "retirement": 4,
    "worker's-comp": 4,
    "total-fringe": 4,
    "fica": 4,
    "sui": 4,
    "total-payroll-taxes": 4,
    "employee-name": "Gardener",
    "customer-name": "Gardener Broske",
    "class-name": "Broske",
    "total-hours": "gbroske3",
    "allocation": "gbroske3"
}, {
    "gross-wage": 5,
    "vacation/pto": 5,
    "total-salary": 5,
    "health-insurance": 5,
    "retirement": 5,
    "worker's-comp": 5,
    "total-fringe": 5,
    "fica": 5,
    "sui": 5,
    "total-payroll-taxes": 5,
    "employee-name": "Jourdain",
    "customer-name": "Jourdain Fenwick",
    "class-name": "Fenwick",
    "total-hours": "jfenwick4",
    "allocation": "jfenwick4"
}]

const tableData = mapJSONDataToArray(jsonData);

const stream = fs.createWriteStream('horizontally_scrollable_with_table.pdf');

const doc = new PDFDocument({ size: [tableData[0].length * 180, 3000] });
doc.pipe(stream);

const cellWidth = 150;
const cellHeight = 20;
const borderWidth = 1;

function drawTable(table, x, y) {
  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    for (let j = 0; j < row.length; j++) {
      // Determine cell background color based on the row index
      let cellBackground = 'white'; // Default to white
      if (i === 1) {
        cellBackground = 'lightgreen'; // Set light green background for the second row
      } else if (i === 2) {
        cellBackground = 'lightblue'; // Set light blue background for the third row
      }

      // Draw cell backgrounds with different colors
      doc.rect(x + j * cellWidth, y + i * cellHeight, cellWidth, cellHeight).fill(cellBackground);

      // Draw the cell content with different colors
      const textColor = i === 0 ? 'black' : 'blue'; // Use different colors for headers and data
      doc.fillColor(textColor);
      doc.text(row[j], x + j * cellWidth + borderWidth, y + i * cellHeight + borderWidth, {
        width: cellWidth - 2 * borderWidth,
        align: 'center',
      });

      // Draw cell borders
      doc.rect(x + j * cellWidth, y + i * cellHeight, cellWidth, cellHeight).stroke();
    }
  }
}

const tableX = 50;
const tableY = 100;

drawTable(tableData, tableX, tableY);

doc.end();

console.log('Horizontally scrollable PDF with a colored table created.');
