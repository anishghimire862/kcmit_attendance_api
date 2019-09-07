var passport = require('../../config/passport');
var jwtConfig = require('../../config/jwtConfig');
var jwt = require('jsonwebtoken');
var db = require('../../app/Model/db');
var role = require('./role.controller');
module.exports = {
    login: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if(!user) {
                res.status(401).json({ status: info.message });
            }
            else {
                let email = req.body['email'];
                const token = jwt.sign(email, jwtConfig.secret);
                res.status(200).json({ status: info.message, token: token, role: info.role });
            }
        })(req, res);
    },
		getDetails: function(req, res) {
			if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, jwtConfig.secret);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
				role.getRole(decoded, function(err, data) {
        	res.status(200).json({ loggedIn: true, role: data })
      	})

			}
		},
}
