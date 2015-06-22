'use strict';

module.exports = Backbone.Collection.extend({
	model: require('./Link.js'),
	url: '/api/links'
});
