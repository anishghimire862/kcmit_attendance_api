const db = require('../Model/db');

module.exports = {
    getStudentsForAttendance: function(req, res) {
        let faculty = req.params.faculty;
        let section = req.params.section;
        let semester = req.params.semester;
        db.query("SELECT students.id as 'student_id', student_semesters.id AS 'student_semester_id', "+
            "name FROM "+
            "students "+
            "INNER JOIN student_semesters ON students.id = "+
            "student_semesters.student_id AND NOW() BETWEEN `from` AND `TO` AND students.faculty=?"+
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
        
    }
}