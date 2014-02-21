var data = require("../data.json");
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

//var databaseUrl = "mongodb://localhost:27017/mydb"
var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);


exports.markStationAsFinished = function(req, res) { 
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if (query["gym"] === "tresfit") {
		db.tresfit.update({name:query["machine"]}, {name:query["machine"], occupied:0})
	} else if (query["gym"] === "arrgym") {
		db.arrgym.update({name:query["machine"]}, {name:query["machine"], occupied:0})
	}
	res.render('station-finished', data);
}