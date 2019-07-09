const db = require('../Model/db');

module.exports = {
    getStudents: function(req, res) {
        db.query("SELECT * FROM students", (err, data) => {
            if(data.length == 0) {
                res.status(404).json({ status: 'Nothing found.' });
            } 
            else {
            res.status(200).json({ data: data })
            }
        })
    },

    getStudentById: function(req, res) {
        let id = req.params.id;
        db.query("SELECT * FROM students where id=?", [id], (err, data) => {
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

    getStudentByBatch: function(req, res) {
        let batch = req.params.batch;
        db.query("SELECT * FROM students where batch=?", [batch], (err, data) => {
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

    addStudent: function(req, res) {
        let batch = req.body.batch;
        let faculty = req.body.faculty;
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;

        if(req.file) {
            let image = req.file.filename;
            db.query("INSERT INTO students(batch, faculty, name, email, phone, image) values(?,?,?,?,?,?)", 
                [batch, faculty, name, email, phone, image], (err, data) => {
                if(err)
                    res.json(err);
                else 
                    res.status(201).json({ data: req.body, image: image});
            })
        }
        else {
            db.query("INSERT INTO students(batch, faculty, name, email, phone) values(?,?,?,?,?)", 
            [batch, faculty, name, email, phone], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(201).json({ data: req.body });
            }) 
        }
    },

    updateStudent: function(req, res, next) {
        let batch = req.body.batch;
        let faculty = req.body.faculty;
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;

        let id = req.body.id;
 
        if(req.file) {
            let image = req.file.filename;
            db.query("UPDATE students SET batch=?, faculty=?, name=?, email=?, phone=?, image=? WHERE id=?", 
                [batch, faculty, name, email, phone, image, id], (err, data) => {
                if(err)
                    res.json(err);
                else 
                    res.status(200).json({ data: req.body, image: image});
            })
        }
        else {
            db.query("UPDATE students SET batch=?, faculty=?, name=?, email=?, phone=? WHERE id=?", 
                [batch, faculty, name, email, phone, id], (err, data) => {
                if(err)
                    res.json(err);
                else 
                    res.status(200).json({ data: req.body });
            })
        }
    },

    deleteStudent: function(req, res) {
        let id = req.params.id;

        db.query("DELETE FROM students WHERE id=?", [id], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(204).json({status: 'Deleted successfully.'});
        })
    }
}