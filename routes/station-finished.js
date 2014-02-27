
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

//var databaseUrl = "mongodb://localhost:27017/mydb"
var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);
var items;

exports.markStationAsFinished = function(req, res) { 
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	var d = new Date();
	var n = d.getTime()/1000;
	var minutes;
	var seconds;
	if (query["gym"] === "tresfit") {
		db.tresfit.find({name:query["machine"]}).toArray(function(err, items){
			var oldtime = items[0].time;
			var changed = n-oldtime;
			minutes = Math.floor(changed/60);
			seconds = Math.floor(changed%60);
			db.tresfit.update({name:query["machine"]}, {$set:{occupied: 'Available', time:n}})
			res.render('station-finished', {'min': minutes, 'sec':seconds});
		});
	} else if (query["gym"] === "arrgym") {
		db.arrgym.find({name:query["machine"]}).toArray(function(err, items){
			var oldtime = items[0].time;
			var changed = n-oldtime;
			minutes = Math.floor(changed/60);
			seconds = Math.floor(changed%60);
			db.arrgym.update({name:query["machine"]}, {$set:{occupied: 'Available', time:n}})
			res.render('station-finished', {'min': minutes, 'sec':seconds});
		});
	}

	
}