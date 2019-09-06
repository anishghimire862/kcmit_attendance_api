const db = require('../Model/db');
const attendanceData = require('./attendanceDto')

module.exports = {
    getStudentsForAttendance: function(req, res) {
        let faculty = req.params.faculty;
        let section = req.params.section;
        let semester = req.params.semester;
        db.query("SELECT students.id as 'student_id', student_semesters.id AS 'student_semester_id', "+
            "name, image FROM "+
            "students "+
            "INNER JOIN student_semesters ON students.id = "+
            "student_semesters.student_id AND NOW() BETWEEN `from` AND `to` AND students.faculty=?"+
            "AND student_semesters.section =? and student_semesters.semester =?", [faculty, section, semester], 
            (err, data) => {
                if(err)
                    res.json(err);
                else {
                    if(data.length === 0) {
                        res.status(404).json({ status: 'Nothing found.' });
                    }
                    else {
                        res.status(200).json({ 
                            faculty: faculty,
                            section: section,
                            semester: semester,
                            students: data 
                        })
                    }
                } 
            }
        )  
    },
       getAttendance: function(req, res) {

      let semester = req.body.semester;
      let section = req.body.section;
      let faculty = req.body.faculty;
      let subject_code = req.body.subject_code;
      let from = req.body.from
      let to = req.body.to

			db.query("SELECT * FROM student_semesters inner join" +
				" students ON student_semesters.student_id = students.id" +
				" inner join student_subject_semesters ON student_subject_semesters.student_semester_id = student_semesters.id" +
				" inner join subjects ON student_subject_semesters.subject_id = subjects.id" +
				" inner join attendances ON subjects.id = attendances.subject_id" +
				" WHERE semester=? AND section=? AND faculty=? AND subject_code=? AND `date` between `from` AND `to`", [semester, section, faculty,subject_code, from, to],
				(err, data) => {
					if(err)
						res.json(err)
					else 
						res.json(data)
				}
			)


    },

		submitAttendance: function(req, res) {
        let datetime = new Date()
        let date = datetime.toISOString().slice(0,10)
				let attendance = req.body
				for (var i=0; i<attendance.length; i++) {
					student_semester_id = attendance[i].student_semester_id;
					
					status = attendance[i].status
					subject_code = attendance[i].subject_code;

					db.query("INSERT INTO attendances(date, student_semester_id, status, subject_id) values(?,?,?,?)",
            [date, student_semester_id, status, subject_code], (err, data) => {
                if(err)
                    res.json(err)
            })		
				}
					res.status(201).json({ data: req.body });
			}
}
