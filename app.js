var express = require("express");
var app = express();

// app SetUp
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



app.get("/", function(req, res){
	res.render("color");
});


//// LISTENER
app.listen(process.env.PORT || 3000, function() {
    console.log("color Game has started ...");
});