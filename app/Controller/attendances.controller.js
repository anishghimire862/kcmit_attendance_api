const db = require('../Model/db');

module.exports = {
    getStudentsForAttendance: function(req, res) {
        let faculty = req.params.faculty;
        let section = req.params.section;
        let semester = req.params.semester;

        db.query("SELECT * FROM students WHERE faculty=? AND section=?", [faculty, section], (err, data) => {
            if(err)
                console.log(err)
            else {
                let studentsArray = []
                for(let i = 0; i < data.length; i++) {
                    let studentEnrolledYear = data[i].batch
                    let currentDate = new Date()
                    let currentYear = currentDate.getFullYear()
                    let currentMonth = currentDate.getMonth() + 1
                    let studentSemester = currentYear - studentEnrolledYear
                    studentSemester *= 2
                    
                    if(currentMonth >= 11) {
                        studentSemester += 1
                    }

                    studentsArray.push({...data[i], semester: studentSemester})

                }
                let filteredStudents = studentsArray.filter(x => x.semester == semester)
                res.json(filteredStudents)
            }
        })
    },
    getAttendance: function(req, res) {
      let semester = req.params.semester;
      let section = req.params.section;
      let faculty = req.params.faculty;
      let subject_code = req.params.subject_code;
      let from = req.params.from
      let to = req.params.to
    //   ,semester, section, faculty, subject_code
        db.query("SELECT students.name as name, subjects.subject_name as subject, DATE_FORMAT(attendances.date, '%Y-%m-%d') as start," +
            " attendances.status as status, teachers.name as teacherName FROM attendances inner join" +
            " students ON attendances.student_id = students.id" +
            " inner join subjects ON attendances.subject_id = subjects.id" +
            " inner join teachers ON attendances.teacher_id_fk = teachers.id" +
            " WHERE semester=? AND section=? AND faculty=? AND subject_code=? AND date BETWEEN ? AND ?",   
                [semester, section, faculty, subject_code, from, to], (err, data) => {
                if(err){
                    console.log(err)
                }
                else{ 
                    console.log(data)
                    res.status(200).json({data: data})
                }
            }
		)

/*
     db.query("SELECT * FROM student_semesters inner join students on student_semesters.student_id = students.id inner join student_subject_semesters on student_subject_semesters.student_semester_id = student_semesters.id inner join subjects on student_subject_semesters.subject_id = subjects.id inner join attendances on subjects.id = attendances.subject_id where semester = '6' and section = 'B' and faculty = 'BIM' and subject_code = 'IT0015'  and `date` >= '2019-09-01' and `date` <= '2019-09-30'",
					(err,data) => {
					if(err)
						res.json(err)
					else { 
						console.log(data)
						res.status(200).json({ data: data })
					}
				}
			)
*/

    },

    submitAttendance: function(req, res) {
    let datetime = new Date()
    let date = datetime.toISOString().slice(0,10)
    let attendance = req.body
    for (var i=0; i<attendance.length; i++) {
        // student_semester_id = attendance[i].student_semester_id;
        status = attendance[i].status
        student_id = attendance[i].student_id;
        semester = attendance[i].semester;
        subject_id = attendance[i].subject_id;
        teacher_id_fk = attendance[i].teacher_id_fk

        db.query("INSERT INTO attendances(date, status, subject_id, student_id, semester, teacher_id_fk) values(?,?,?,?,?,?)",
        [date, status, subject_id, student_id, semester, teacher_id_fk], (err, data) => {
            if(err)
                console.log(err)
        })		
    }
        res.status(201).json({ data: req.body });
    }
}
