const db = require('../Model/db');
var randomPassword = require('../../middleware/random.password.generator');
module.exports = {
    getTeachers: function(req, res) {
        db.query("SELECT * FROM teachers", (err, data) => {
            if(data.length == 0) {
                res.status(404).json({ status: 'Nothing found.' });
            } 
            else {
            res.status(200).json({ data: data })
            }
        })
    },

    getTeacherById: function(req, res) {
        let id = req.params.id;
        db.query("SELECT * FROM teachers where id=?", [id], (err, data) => {
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

    addTeacher: function(req, res) {
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let password = randomPassword.generateRandomPassword();

        if(req.file) {
            let image = req.file.filename;
            db.query("INSERT INTO teachers(name, email, phone, password, image) values(?,?,?,?,?)", 
                [name, email, phone, password, image], (err, data) => {
                if(err)
                    res.json(err);
                else 
                    res.status(201).json({ data: req.body, image: image});
            })
        }
        else {
            db.query("INSERT INTO teachers(name, email, phone, password) values(?,?,?,?)", 
            [name, email, phone, password], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(201).json({ data: req.body });
            }) 
        }
    },

    updateTeacher: function(req, res, next) {
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        
        let id = req.body.id;
 
        if(req.file) {
            let image = req.file.filename;
            db.query("UPDATE teachers SET name=?, email=?, phone=?, image=? WHERE id=?", 
                [name, email, phone, image, id], (err, data) => {
                if(err)
                    res.json(err);
                else 
                    res.status(200).json({ data: req.body, image: image});
            })
        }
        else {
            db.query("UPDATE teachers SET name=?, email=?, phone=? WHERE id=?", 
                [name, email, phone, id], (err, data) => {
                if(err)
                    res.json(err);
                else 
                    res.status(200).json({ data: req.body });
            })
        }
    },

    deleteTeacher: function(req, res) {
        let id = req.params.id;

        db.query("DELETE FROM teachers WHERE id=?", [id], (err, data) => {
            if(err)
                res.json(err);
            else 
                res.status(204).json({status: 'Deleted successfully.'});
        })
    }
}