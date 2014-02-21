
function createTable(){
var databaseUrl = "mongodb://admin:admin@ds033069.mongolab.com:33069/heroku_app22105721";

var collections = ["tresfit", "arrgym"];
var db = require("mongojs").connect(databaseUrl, collections);
db.tresfit.find().toArray(function(err, items) {
        {{#each items}}
 		 <p>{{name}}: Occupied: {{occupied}}</p>
  		{{/each}}
    });
}