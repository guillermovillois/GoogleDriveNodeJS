const xlsx = require('xlsx');

var workbook = xlsx.readFile('data.xlsx', {});
var sheet = workbook.Sheets['data']
var data = xlsx.utils.sheet_to_json(sheet)
var newData = data.map((record) => {
    record.FY19 = record.GS + record.GC;
    delete record.GS;
    delete record.GC;
    return record;
})
console.log(newData);
console.log(workbook.SheetNames)

let newWorkBook = xlsx.utils.book_new();
let newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWorkBook, newWS, 'newData')
xlsx.writeFile(newWorkBook, 'NewDATAFILE.xlsx')