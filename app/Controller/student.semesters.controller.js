const db = require('../Model/db');

module.exports = {
    getStudentSemesters: function(req, res) {
        db.query("SELECT * FROM student_semesters", (err, data) => {
            if(data.length == 0) {
                res.status(404).json({ status: 'Nothing found.' });
            } 
            else {
            res.status(200).json({ data: data })
            }
        })
    },

    getStudentSemestersByStudentSemesterId: function(req, res) {
        let studentSemesterId = req.params.id;
        db.query("SELECT * FROM student_semesters where id=?", [studentSemesterId], (err, data) => {
            if(err)
                res.json(err);
            else {
                if(data.length === 0) {
                    res.status(404).json({ status: 'Nothing found.' });
                }
                else {
                    res.status(200).json({ data: data })
                }
            }
        })
    },

    // getStudentSemestersByStudentId() displays all semesters a student has studied.
    
    getStudentSemestersByStudentId: function(req, res) {
        let studentId = req.params.id;
        db.query("SELECT * FROM student_semesters where student_id=?", [studentId], (err, data) => {
            if(err)
                res.json(err);
            else {
                if(data.length === 0) {
                    res.status(404).json({ status: 'Nothing found.' });
                }
                else {
                    res.status(200).json({ data: data })
                }
            }
        })
    },

    addStudentSemester: function(req, res) {
        let studentId = req.body.studentId;
        let from = req.body.from;
        let to = req.body.to;
        let section = req.body.section;
        let semester = req.body.semester;

        db.query("INSERT INTO student_semesters(student_id, `from`, `to`, section, semester) values(?,?,?,?,?)", 
            [studentId, from, to, section, semester], (err, data) => {
                if(err)
                    res.json(err)
                else 
                res.status(201).json({ data: req.body });
            })
    },

    updateStudentSemester: function(req, res, next) {
        let studentSemesterId = req.body.studentSemesterId;
        let from = req.body.from;
        let to = req.body.to;
        let section = req.body.section;
        let semester = req.body.semester;

        db.query("UPDATE student_semesters SET `from`=?, `to`=?, section=?, semester=? WHERE id=?", 
            [from, to, section, semester, studentSemesterId], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(200).json({ data: req.body });
        })
    },

    deleteStudentSemester: function(req, res) {
        let studentSemesterId = req.params.id;

        db.query("DELETE FROM student_semesters WHERE id=?", [studentSemesterId], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(204).json({status: 'Deleted successfully.'});
        })
    }
}