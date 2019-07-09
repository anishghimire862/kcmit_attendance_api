const db = require('../Model/db');

module.exports = {
    getStudentSubjectSemesters: function(req, res) {
        db.query("SELECT * FROM student_subject_semesters", (err, data) => {
            if(data.length == 0) {
                res.status(404).json({ status: 'Nothing found.' });
            } 
            else {
            res.status(200).json({ data: data })
            }
        })
    },

    addStudentSubjectSemester: function(req, res) {
        let subjectId = req.body.subjectId;
        let studentSemesterId = req.body.studentSemesterId;

        db.query("INSERT INTO student_subject_semesters(subject_id, student_semester_id) values(?,?)", 
            [subjectId, studentSemesterId], (err, data) => {
                if(err)
                    res.json(err)
                else 
                res.status(201).json({ data: req.body });
            })
    }
}