'use strict';
var Controller = require('./controller');
var Router = require('./router');

module.exports = function(app){

	var controller = new Controller({ app: app });
	var router = new Router({ controller : controller });

	app.reqres.setHandler('links:list', function( params ) {
		router.navigate('links');
		return controller.list(params);
	});

};
