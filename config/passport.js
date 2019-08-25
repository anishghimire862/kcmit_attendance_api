var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var passportJWT = require("passport-jwt");
var JWTStrategy   = passportJWT.Strategy;
var ExtractJWT = passportJWT.ExtractJwt;

var JwtConfig = require('./jwtConfig.js');

var db = require('../app/Model/db');

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        console.log(email)
        db.query("SELECT * FROM teachers WHERE email=?", [email], (error, results, fields) => {
            console.log(results);
            if(results.length == 0) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            else if(results[0].password != password) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, true, {
                message: 'Successful.',
                role: results[0].role
            });
        })
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : JwtConfig.secret
},

function (jwtPayload, cb) {
    return cb(null, jwtPayload)
}
));



passport.serializeUser(function(user, cb) {
cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
cb(null, obj);
});

module.exports = passport;
