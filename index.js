var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(port, function () {
	console.log("Running on port " + port);
});

var mainRoutes = require('./app/Routes/Routes');
app.use(mainRoutes);

module.exports = app;