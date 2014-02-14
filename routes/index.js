// Get all of our friend data
var data = require('../data.json');
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

//var databaseUrl = "mongodb://localhost:27017/mydb"
var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);



exports.view = function(req, res){
	db.tresfit.find().toArray(function(err, items) {
        res.render('index', {'items': items});
        console.log(items);
    });
};