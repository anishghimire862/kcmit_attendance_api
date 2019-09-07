var db = require('../../app/Model/db');
module.exports = {
	    getRole: function(email, callback) {
        db.query("SELECT role FROM teachers WHERE email=?", [email], (error, results, fields) => {
          if(error)
            callback(error, null)
          else
            callback(null, results[0].role)
          })
      }

}
