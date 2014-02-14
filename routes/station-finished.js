var data = require("../data.json");
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

//var databaseUrl = "mongodb://localhost:27017/mydb"
var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);


exports.markStationAsFinished = function(req, res) { 
	db.tresfit.update({name:"bench1"}, {name:"bench1", occupied:0});
	res.render('station-finished', data);
}