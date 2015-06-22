var dest = "./client/js/dist";
var src = './client/js/src';

module.exports = {
	jshint: {
		src: './client/js/src/**/*.js',
		options: {
			browserify: true,
			globals: {
				instanceMarker: false,
				csrf: false,
				console: false,
				Marionette: false,
				Backbone: false,
				_: false
			},
			unused: 'vars',
			curly: true,
			immed: true,
			globalstrict: true,
			// quotmark: true,
			undef: true,
			strict: true,
			expr: true,
			noarg: false,
			newcap: false
		}
	},
	browserify: {
		// Enable source maps
		debug: true,
		// Additional file extentions to make optional
		extensions: ['.coffee', '.jade'],
		// A separate bundle will be generated for each
		// bundle config in the list below
		bundleConfigs: [{
			entries: './client/js/src/app.js',
			dest: dest,
			outputName: 'bundle.js'
		}

		]
	}
};
