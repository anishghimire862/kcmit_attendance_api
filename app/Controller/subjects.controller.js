const db = require('../Model/db');

module.exports = {
    getSubjects: function(req, res) {
        db.query("SELECT * FROM subjects", (err, data) => {
            if(data.length == 0) {
                res.status(404).json({ status: 'Nothing found.' });
            } 
            else {
            res.status(200).json({ data: data })
            }
        })
    },

		getTeacherSubjects: function(req, res) {
  	  let teacherId = req.params.teacherId;
      db.query("SELECT subject.id as subjectId, "+
        "subject.subject_code as subjectCode, " +
        "subject.subject_name as subject_name, " +
        "ts.semester as semester, " +
        "ts.faculty as faculty " +
        "FROM teacher_subjects ts " +
        "INNER JOIN " +
        "subjects subject ON ts.subject_id = subject.id " +
        "INNER JOIN " +
        "teachers teacher ON ts.teacher_id = teacher.id " +
        "WHERE "+
        "teacher.id = ? ", [teacherId], (err, data) => {
          if(err)
            res.json(err);
          else {
            res.status(200).json({data: data});
          }
        })
    },


    getSubjectById: function(req, res) {
        let id = req.params.id;
        db.query("SELECT * FROM subjects where id=?", [id], (err, data) => {
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

    addSubject: function(req, res) {
        let subjectName = req.body.subject_name;
        let subjectCode = req.body.subject_code;
        db.query("INSERT INTO subjects(subject_name, subject_code) values(?,?)", 
            [subjectName, subjectCode], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(201).json({ data: req.body });
        })
    },

    updateSubject: function(req, res, next) {
        let subjectName = req.body.subject_name;
        let subjectCode = req.body.subject_code;
        let subjectId = req.body.id;
 
        db.query("UPDATE subjects SET subject_name=?, subject_code=? WHERE id=?", 
            [subjectName, subjectCode, subjectId], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(200).json({ data: req.body });
        })
    },

    deleteSubject: function(req, res) {
        let id = req.params.id;

        db.query("DELETE FROM subjects WHERE id=?", [id], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(204).json({status: 'Deleted successfully.'});
        })
    }
}
