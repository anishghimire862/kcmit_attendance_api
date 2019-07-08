const db = require('../Model/db');
var randomPassword = require('../../middleware/random.password.generator');

var mail = require('../../mail');

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

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"KCMIT College" <kcmitattendance@zoho.com>', // sender address
            to: email, // list of receivers
            subject: 'Lecturer Login Information', // Subject line
            html: `<h1>Namaste, ${name}.</h1>
                <p> 
                    Welcome to KCMIT Attendance System.
                    Your login details are:
                    email: ${email},
                    password: ${password} 
                </p>

                <p>
                    For better security please change your password
                    as soon as possible.
                </p>

                <p>
                    Thank you,
                    KCMIT College.
                </p>
            `
        };

        if(req.file) {
            let image = req.file.filename;
            db.query("INSERT INTO teachers(name, email, phone, password, image) values(?,?,?,?,?)", 
                [name, email, phone, password, image], (err, data) => {
                if(err)
                    res.json(err);
                else {
                    mail.transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            res.status(400).send({success: false})
                        } else {
                            res.status(201).json({ data: req.body, image: image});
                        }
                    }); 
                }
            })
        }
        else {
            db.query("INSERT INTO teachers(name, email, phone, password) values(?,?,?,?)", 
            [name, email, phone, password], (err, data) => {
                if(err)
                    res.json(err);
                else {
                    mail.transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            res.status(400).send({success: false})
                        } else {
                            res.status(201).json({ data: req.body, image: image});
                        }
                    });
                }
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