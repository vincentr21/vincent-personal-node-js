var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


//sets the port that the server will listen on
app.set('port', (process.env.PORT || 5000));

//tells nodejs where to find static files
app.use(express.static(__dirname + '/public'));

//views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (request, response) {
//	response.render('about-me.html');
	
	//this is probably not the best way to do this, but i'll do for now
//	response.sendFile( app.get('views') + '/pages/about-me.html');
	
	response.render('pages/about-me');
});

app.get('/blast-past', function (request, response) {
	response.render('pages/blast-past');
});

app.get('/showcase', function (request, response) {
	response.render('pages/showcase');
});

app.get('/about-website', function (request, response) {
	response.render('pages/about-website');
});

app.get('/projects', function (request, response) {
	response.render('pages/projects');
});


//=================== chat app ============================================
app.get('/projects/chat', function (request, response) {
	response.render('pages/chat');
});

io.on('connection', function(socket){
	  console.log('a user connected');
	  socket.on('disconnect', function(){
		    console.log('user disconnected');
		  });
	  
	  socket.on('chat message', function(msg){
		  	io.emit('chat message', msg);
		    console.log('message: ' + msg);
		  });
	  
	});



//http.listen(3000, function(){
//	  console.log('listening on *:3000');
//	});

// this is for the chat app
http.listen(app.get('port'), function() {
	  console.log('http is running on port', app.get('port'));
	});




//app.listen(app.get('port'), function() {
//  console.log('Node app is running on port', app.get('port'));
//});



