'use strict';

var LinksContainer = require('./views/LinksContainer');

module.exports = Marionette.Controller.extend({

	initialize: function (options) {
		this.app = options.app;
		_.bindAll(this, 'list');
	},

	list: function(){
		this.linksContainer = new LinksContainer({ app: this.app });
		this.app.container.show( this.linksContainer );
	}

});
