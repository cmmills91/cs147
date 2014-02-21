
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";
var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var stationStarted = require('./routes/station-started');
var stationFinished = require('./routes/station-finished');

var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

//var databaseUrl = "mongodb://localhost:27017/mydb"
var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
/*
var c = db.tresfit.find();
	c.forEach(function(err, doc){
		if(doc == null) return false;
		console.log(doc);
		var asd = doc.name;
		console.log(asd);
		string = asd;
	});
	console.log("abc");

*/
/*
var c = db.tresfit.find();

	c.forEach(function(err, doc){
		if(doc == null) return false;
		console.log(doc);
		var asd = doc.name;
		console.log(asd);

	});
	console.log("abc");
	return;
*/
// Add routes here
app.get('/', index.view);

// Example route
// app.get('/users', user.list);
app.get('/station-started', stationStarted.markStationAsStarted);
app.get('/station-finished', stationFinished.markStationAsFinished);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
