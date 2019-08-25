var jwt = require('jsonwebtoken');
var db = require('../../app/Model/db');
module.exports = {
    permit: function(allowed) {
        return (req, res, next) => {
            const usertoken = req.headers.authorization;
            const token = usertoken.split(' ');
            const email = jwt.verify(token[1], 'jwt-secret');
            db.query("SELECT role from teachers WHERE email=?", [email], (error, results, fields) => {
                if(allowed == results[0].role) {
                    next();
                }
                else {
                    res.status(401).json('You are not authorized to access this.');
                }
            });
        }
    },

    gets: function(req, res) {
        res.json('Hello');
    }
}
