'use strict';

var LinkView = require('./LinkView.js');

module.exports = Marionette.CollectionView.extend({
	childView: LinkView,
	tagName: 'table',
	className: 'Links table',
	initialize: function(){
		_.bindAll(this, 'refresh');
	},

	onRender: function(){
		// console.log('Links View render');
	},

	refresh: function(){
		this.collection.fetch();
	}
});