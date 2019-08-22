var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var app = express();

var port = process.env.PORT || 8001;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(serveStatic('public/images'))

app.listen(port, function () {
	console.log("Running on port " + port);
});

var mainRoutes = require('./app/Routes/Routes');
app.use(mainRoutes);

module.exports = app;
