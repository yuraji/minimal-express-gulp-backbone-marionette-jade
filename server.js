var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require('path');

app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use('/js', express.static(__dirname + '/client/js'));


app.get('/', function(req, res){
	res.render('index', {links: require('./data/links')(), server:true} );
});

app.get('/api/links', function(req, res){
	res.json( require('./data/links')() );
});


var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("localhost:"+port);
});

