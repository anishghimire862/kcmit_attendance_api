var passport = require('../../config/passport');
var jwtConfig = require('../../config/jwtConfig');
var jwt = require('jsonwebtoken');

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
    }
}
