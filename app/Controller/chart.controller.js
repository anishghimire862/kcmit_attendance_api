var db = require('../../app/Model/db');
module.exports = {
	getTodaysReportOfSubject: function(req, res) {
		let semester = req.params.semester;
		let subjectId = req.params.subjectId;
		db.query("SELECT " + 
			"COUNT(att.status) as count, " +
			"att.status as status, " +
			"att.semester as semester, " +
			"att.date as date, " +
			"sub.id as subjectId, " +
			"sub.subject_name as subjectName " +
			"FROM attendances att " +
			"INNER JOIN subjects sub " +
			"ON sub.id = att.subject_id " +
			"WHERE semester = ? and att.subject_id = ? and DATE(date) = CURDATE() " +
			"GROUP BY status ", [semester, subjectId], (err, data) => {
    	if(data.length == 0) {
      	res.status(404).json({ status: 'Nothing found.' });
      }
      else {
      	res.status(200).json({ data: data })
      }
    })
  },
}

