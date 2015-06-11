var express = require("express");
	app=express();
var request = require('request');
var params = "";

console.log(process.argv);
if (process.argv.length>2){
	param = "http://www.omdbapi.com/?=" + process.argv[2] + "&plot=short&r=json"
} else {
	param = "https://pacific-stream-1533.herokuapp.com/"
}

request(param, function (error, response, body) {
  if (error) {
    console.log("Error!  Request failed - " + error);
  } else if (!error && response.statusCode === 200) {
  	omdbData = JSON.parse(body);
    console.log('Title: '+ omdbData.Title);
    res.senf(omdbData.Title)
  }
});




app.get("/", function(req, res){
	res.send("This is a simple server");
})

app.listen("3000", function(){});