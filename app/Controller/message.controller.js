const db = require('../Model/db');
module.exports = {
	getMessage (req, res) {
  	db.query("SELECT * FROM messages", (err, data) => {
	  	if(err)
				console.log(err)
        	else {
						console.log('I have been invoked')
          	res.json(data)
          }
    })
	},

	postMessage: function(req, res) {
		let message = req.body.message;
		db.query("INSERT INTO messages(message) values(?)",
        [message], (err, data) => {
            if(err)
                console.log(err)
        })
        res.json({ data: req.body });
    }
}
