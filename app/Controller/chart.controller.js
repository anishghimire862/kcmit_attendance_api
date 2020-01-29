var db = require('../../app/Model/db');
module.exports = {
	getTodaysSubjects: function(req, res) {
		db.query("SELECT att.subject_id as subjectId, att.semester as semester, sub.subject_name as subjectName, stu.section as section, tec.name as teacherName, " +
			"stu.faculty as faculty from attendances att INNER JOIN students stu ON stu.id = att.student_id INNER JOIN subjects sub ON sub.id = att.subject_id"+
			" INNER JOIN  teachers tec ON tec.id = att.teacher_id_fk "+
			"where date = CURRENT_DATE GROUP BY subject_id, semester, section, faculty", (err, data) => {
				if(data.length == 0) {
					res.status(400).json({ status: 'Nothing found' })
				} else {
					res.status(200).json({ data: data })
				}
			})
	},

  getYesterdaysSubjects: function(req, res) {
    db.query("SELECT att.subject_id as subjectId, att.semester as semester, sub.subject_name as subjectName, stu.section as section, tec.name as teacherName, " +
      "stu.faculty as faculty from attendances att INNER JOIN students stu ON stu.id = att.student_id INNER JOIN subjects sub ON sub.id = att.subject_id"+      
      " INNER JOIN  teachers tec ON tec.id = att.teacher_id_fk "+
      "where date = CURRENT_DATE - 1  GROUP BY subject_id, semester, section, faculty", (err, data) => {
        if(data.length == 0) {
          res.status(400).json({ status: 'Nothing found' })
        } else {
          res.status(200).json({ data: data })
        }
      })
  },


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
	
  getYesterdaysReportOfSubject: function(req, res) {
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
      "WHERE semester = ? and att.subject_id = ? and DATE(date) = CURDATE() - 1  " +
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

