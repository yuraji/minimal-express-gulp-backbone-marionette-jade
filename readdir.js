var fs = require('fs');

var rootDir = {
	name: ".",
	path: "../",
	isDir: true,
	children: []
};

var toProcess = 1;

// var theEnd = function( item, pad ){
// 	if(!pad) pad = '';

// 	if (item.isDir) {
// 		console.log( item.name );
// 		rootDir.children.forEach(function( child ){
// 			theEnd( child, ' '+pad );
// 		});
// 	}
// }

var readdir = function( parent ){

	console.log( parent.name );

	fs.readdir( parent.path, function(err, files){
		files.forEach(function(fileName){

			var stats = fs.statSync( parent.path + fileName );

			var file = {
				name: fileName,
				isDir: 	stats.isDirectory(),
				path: parent.path + fileName + '/',
				children: []
			}

			if( file.isDir ){
				toProcess++;
				readdir( file );
			}

			parent.children.push( file );


		});
		toProcess--;
		console.log( toProcess );
		if( toProcess < 1 ) {
			// fs.writeFile("tree.json", JSON.stringify(rootDir) );
			// theEnd( rootDir );
		}
	});
};

readdir( rootDir );


