'use strict';

var LinksView = require('./LinksView.js');

var LinksCollection = require('../models/LinksCollection.js');

module.exports = Marionette.LayoutView.extend({
	initialize: function (options) {
		this.app = options.app;
		_.bindAll(this, 'refresh');
	},

	template: require('../../../../../../views/LinksContainer.jade'),

	className: 'Main',

	regions: {
		linksRegion: "#links"
	},

	ui: {
		refreshBtn: '#refresh'
	},
	events: {
		'click @ui.refreshBtn': 'refresh'
	},

	onRender: function(){
		// console.log('MainView Rendered');

		this.links = new LinksCollection();
		this.links.fetch();

		this.linksView = new LinksView({ collection: this.links });
		this.linksRegion.show( this.linksView );

	},
	refresh: function(){
		// console.log('REFRESH btn clicked');
		this.linksView.refresh();
	}

 });
