const db = require('../Model/db');

module.exports = {
    getTeacherSubjects: function(req, res) {
        db.query("SELECT * FROM teacher_subjects", (err, data) => {
            if(data.length == 0) {
                res.status(404).json({ status: 'Nothing found.' });
            } 
            else {
            res.status(200).json({ data: data })
            }
        })
    },

    getTeacherSubjectByTeacherId: function(req, res) {
        let teacherId = req.params.teacherId;
        db.query("SELECT * FROM teacher_subjects where teacher_id=?", [teacherId], (err, data) => {
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

    getTeacherSubjectBySubjectId: function(req, res) {
        let subjectId = req.params.subjectId;
        db.query("SELECT * FROM teacher_subjects where subject_id=?", [subjectId], (err, data) => {
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

    addTeacherSubject: function(req, res) {
        let teacherId = req.body.teacherId;
        let subjectId = req.body.subjectId;
        let semester = req.body.semester;
				let faculty = req.body.faculty;

        db.query("INSERT INTO teacher_subjects(teacher_id, subject_id, semester, faculty) values(?,?,?,?)", 
            [teacherId, subjectId, semester, faculty], (err, data) => {
                if(err)
                    res.json(err)
                else 
                res.status(201).json({ data: req.body });
            })
    },

    updateTeacherSubject: function(req, res, next) {
        let teacherId = req.body.teacherId;
        let subjectId = req.body.subjectId;
        let semester = req.body.semester;
				let faculty = req.body.faculty;

        let id = req.body.id;
        db.query("UPDATE teacher_subjects SET teacher_id=?, subject_id=?, semester=?, faculty=? WHERE id=?", 
            [teacherId, subjectId, semester, faculty, id], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(200).json({ data: req.body });
        })
    },

		getSubjectDetails: function(req, res) {
			let subjectId = req.params.subjectId;
			
			db.query("SELECT subject.id as subjectId, "+
				"subject.subject_code as subjectCode, " +
				"subject.subject_name as subject_name, " +
				"teacher.name as teacherName, " +
				"teacher.image as teacherImage, " +
				"ts.semester as semester, " +
				"ts.faculty as faculty " +
				"FROM teacher_subjects ts " +
				"INNER JOIN " +
				"subjects subject ON ts.subject_id = subject.id " +
				"INNER JOIN " +
				"teachers teacher ON ts.teacher_id = teacher.id " +
				"WHERE "+
				"subject.id = ? ", [subjectId], (err, data) => {
					if(err)
						res.json(err);
					else {
						console.log(data)
						res.status(200).json({data: data});
					}
				})
		},

    deleteTeacherSubject: function(req, res) {
        let teacherSubjectId = req.params.teacherSubjectId;

        db.query("DELETE FROM teacher_subjects WHERE id=?", [teacherSubjectId], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(204).json({status: 'Deleted successfully.'});
        })
    }
}
