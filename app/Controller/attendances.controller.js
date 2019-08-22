const db = require('../Model/db');

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
    submitAttendance: function(req, res) {
        let datetime = new Date()
        let date = datetime.toISOString().slice(0,10)
        let student_semester_id = req.student_semester_id
        let status = req.status
        let subject_code = req.subject_code

        db.query("INSERT INTO attendance(date, student_semester_id, status, subject_code) values(?,?,?,?)",
            [date, student_semester_id, status, subject_code], (err, data) => {
                if(err)
                    res.json(err)
                else   
                    res.status(201).json({ data: req.body });
            })
    }
}
