'use strict';

var app = new Marionette.Application();

window.app = app;

// require('autoload/vendors')(app);
// require('./autoload/plugins')(app);
require('./autoload/modules')(app);

app.addRegions({
	'container' : '#app',
});

app.on('start', function (options) {
	if (!Backbone.history.start({ pushState : false })) {
		// Backbone.history.navigate('links', { trigger : true });
	}
});

app.start();

module.exports = app;
