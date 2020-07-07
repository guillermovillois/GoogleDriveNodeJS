const xlsx = require('xlsx');

var workbook = xlsx.readFile('data.xlsx');

console.log(workbook.Strings);
console.log(workbook.SheetNames)