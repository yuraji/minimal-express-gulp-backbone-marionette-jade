'use strict';

module.exports = Backbone.Model.extend({
	url: '/api/link',
	defaults: {
		name: "",
		path: "",
		isDir: false
	}
});
