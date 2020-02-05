var db = require('../../app/Model/db');
module.exports = {
	getTodaysSubjects: function(req, res) {
		db.query("SELECT att.subject_id as subjectId, att.semester as semester, sub.subject_name as subjectName, stu.section as section, tec.name as teacherName, " +
			"stu.faculty as faculty from attendances att INNER JOIN students stu ON stu.id = att.student_id INNER JOIN subjects sub ON sub.id = att.subject_id"+
			" INNER JOIN  teachers tec ON tec.id = att.teacher_id_fk "+
			"where date = CURRENT_DATE GROUP BY subject_id, semester, section, faculty", (err, data) => {
				if(data.length == 0) {
					res.json({ status: 'Nothing found' })
				} else {
					res.json({ data: data })
				}
			})
	},

  getYesterdaysSubjects: function(req, res) {
    db.query("SELECT att.subject_id as subjectId, att.semester as semester, sub.subject_name as subjectName, stu.section as section, tec.name as teacherName, " +
      "stu.faculty as faculty from attendances att INNER JOIN students stu ON stu.id = att.student_id INNER JOIN subjects sub ON sub.id = att.subject_id"+      
      " INNER JOIN  teachers tec ON tec.id = att.teacher_id_fk "+
      "where DATE(date) = SUBTIME(CURDATE(),'1 0:0:0')  GROUP BY subject_id, semester, section, faculty", (err, data) => {
        if(data.length == 0) {
          res.json({ status: 'Nothing found' })
        } else {
          res.status(200).json({ data: data })
        }
      })
  },

  getWeeklySubjects: function(req, res) {
    db.query("SELECT att.subject_id as subjectId, att.semester as semester, sub.subject_name as subjectName, stu.section as section, tec.name as teacherName, " +
      "stu.faculty as faculty from attendances att INNER JOIN students stu ON stu.id = att.student_id INNER JOIN subjects sub ON sub.id = att.subject_id"+
      " INNER JOIN  teachers tec ON tec.id = att.teacher_id_fk "+
      "where yearweek(DATE(date),0) = yearweek(curdate(), 0)  GROUP BY subject_id, semester, section, faculty", (err, data) => {
        if(data.length == 0) {
          res.json({ status: 'Nothing found' })
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
      	res.json({ status: 'Nothing found.' });
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
      "WHERE semester = ? and att.subject_id = ? and DATE(date) = SUBTIME(CURDATE(),'1 0:0:0')  " +
      "GROUP BY status ", [semester, subjectId], (err, data) => {
      if(data.length == 0) {
        res.json({ status: 'Nothing found.' });
      }
      else {
        res.status(200).json({ data: data })
      }
    })
  },
	
	getWeeklyReportOfSubject: function(req, res) {
		let semester = req.params.semester || 7
		let subjectId = req.params.subjectId || 6;

		db.query("SELECT COUNT(att.status) as count, att.status as status, att.date as date, DAYNAME(att.date) as day, att.semester as " +
			"semester, stu.section as section, stu.faculty as faculty, sub.subject_name as subjectName, tec.name as name FROM attendances " +
			"att INNER JOIN teachers tec on tec.id = att.teacher_id_fk INNER JOIN subjects sub on sub.id = att.subject_id INNER JOIN "+
			"students stu on stu.id = att.student_id WHERE semester = ? and subject_id = ? and yearweek(DATE(date),0) = yearweek(curdate(), 0)  GROUP " +
			"BY date, semester, section, subjectName, status, day", [semester, subjectId], (err, data) => {
				if(data == undefined) {
					res.json({ error: 'error' })
				}
				else if(data.length == 0) {
					res.json({ status: 'Nothing found' })
				} else {
					console.log(data)
					res.status(200).json( { data: data  } )
				}
			})
	}

}

