var excel = require('excel4node');
var attendance = require('./attendances.controller'); 
var utility = require('../../middleware/utility.functions');

module.exports = {
  generateExcelSheet: function(req, res) {
    let attendanceData = [];
    let uniqueCount = null;
    var workbook = new excel.Workbook();
    var worksheet = workbook.addWorksheet('Sheet 1');

    attendance.getAttendanceReport(function (result) {
      attendanceData = result

      worksheet.cell(1,1).string('S.N');
      worksheet.cell(1,2).string('Name');

      uniqueCount = utility.getUniqueStudentsCount(attendanceData);

      let rowCount = 2;
      let colCount = 3;
      let nameRow = 2;
      let nameCol = 2;
      let dateRow = 1;
      let dateCol = 3;

      for(let i = 0; i < attendanceData.length; i++) {
        if(i < uniqueCount) {
          worksheet.cell(nameRow, nameCol).string(attendanceData[i].name);
          nameRow++;
        }
      }

      let uniqueDates = utility.getUniqueDate(attendanceData)
      for(let i = 0; i < utility.getUniqueDateCount(attendanceData); i++) {
        worksheet.cell(dateRow, dateCol).string(uniqueDates[i])
        dateCol++;
        // console.log(utility.getUniqueDate(attendanceData).length)
      }

      for(let i = 0; i<attendanceData.length; i++) {
        worksheet.cell(rowCount, colCount).string(attendanceData[i].status)
        rowCount++;
        if((i+1) % uniqueCount == 0) {
          rowCount = 2;
          colCount++;
        }
      }
      
      workbook.write('Excel.xlsx');    
      res.setHeader('Content-Type', 'application/vnd.openxmlformats');
      res.setHeader("Content-Disposition", "attachment; filename=" + "Excel.xlsx");
      res.sendFile('Excel.xlsx', { root: '.' })
    })
  }
}