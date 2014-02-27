var data = require("../data.json");
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);


exports.markStationAsStarted = function(req, res) {
	var d = new Date();
	var n = d.getTime()/1000;
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if (query["gym"] === "tresfit") {
		db.tresfit.update({name:query["machine"]}, {name:query["machine"], occupied:1, time:n})
	} else if (query["gym"] === "arrgym") {
		db.arrgym.update({name:query["machine"]}, {name:query["machine"], occupied:1})
	}
	res.render('station-started', data);
}