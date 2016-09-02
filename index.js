var express = require('express');
var app = express();

//sets the port that the server will listen on
app.set('port', (process.env.PORT || 5000));

//tells nodejs where to find static files
app.use(express.static(__dirname + '/public'));

//views is directory for all template files
app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');


app.get('/', function (request, response) {
//	response.render('about-me.html');
	
	//this is probably not the best way to do this, but i'll do for now
	response.sendFile( app.get('views') + '/pages/about-me.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});