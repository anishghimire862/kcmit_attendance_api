var excel = require('excel4node');
var attendance = require('./attendances.controller'); 
var utility = require('../../middleware/utility.functions');

module.exports = {
  generateExcelSheet: function(data) {
    let attendanceData = data;
    let uniqueCount = null;
    var workbook = new excel.Workbook();
    var worksheet = workbook.addWorksheet('Sheet 1');

      worksheet.cell(1,1).string('S.N');
      worksheet.cell(1,2).string('Name');

      uniqueCount = utility.getUniqueStudentsCount(attendanceData);

      let nameRow = 2;
      let nameCol = 2;

      for(let i = 0; i < attendanceData.length; i++) {
        if(i < uniqueCount) {
          worksheet.cell(nameRow, nameCol).string(attendanceData[i].name);
          nameRow++;
        }
      }

      let dateRow = 1;
      let dateCol = 3;
      let statusRow = 2;
      let statusCol = 3;

      for(let i = 0; i < attendanceData.length; i++) {
        if(i%uniqueCount == 0) {
          worksheet.cell(dateRow, dateCol).string(attendanceData[i].start);
          dateCol++;
          statRow = 2
        }
        worksheet.cell(statusRow, statusCol).string(attendanceData[i].status);

        if(uniqueCount+1 == statusRow) {
         statusCol++;
         statusRow = 2; 
        } else {
          statusRow++
        }
      }
      
      workbook.write('Excel.xlsx');    
  }
}