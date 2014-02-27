var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.gymInfo = function(req, res) {
	var gymID = req.params.id;
	var search = req.query.search;
	if(search == "all"){
		if (gymID == "tresfit") {
			db.tresfit.find().toArray(function(err, items) {
				res.json(items);
			});
		} else if (gymID == "arrgym") {
			var info = db.arrgym.find().toArray(function(err, items) {
				res.json(items);
			});
		}
	} else{
		if (gymID == "tresfit") {
			db.tresfit.find({tag:search}).toArray(function(err, items) {
				res.json(items);
			});
		} else if (gymID == "arrgym") {
			var info = db.arrgym.find({tag:search}).toArray(function(err, items) {
				res.json(items);
			});
		}
	}
}