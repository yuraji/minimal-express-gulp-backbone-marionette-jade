var data = [
	{ id: 1, url: 'http://smashingmagazine.com', title: 'Smashing Magazine' },
	{ id: 2, url: 'http://alistapart.com', title: 'A List Apart' },
	{ id: 3, url: 'https://css-tricks.com', title: 'CSS Tricks' },
	{ id: 4, url: 'http://www.webdesignerdepot.com/', title: 'Webdesigner Depot' },
	{ id: 5, url: 'http://www.html5rocks.com', title: 'HTML5 Rocks' },
	{ id: 6, url: 'http://sixrevisions.com', title: 'Six Revisions' },
	{ id: 7, url: 'http://www.uxbooth.com/', title: 'UX Booth' },
	{ id: 8, url: 'http://www.noupe.com/', title: 'Noupe' },
	{ id: 9, url: 'http://tympanus.net/codrops/', title: 'Codrops' },
	{ id: 10, url: 'http://webdesignledger.com/', title: 'Web Design Ledger' }
];


module.exports = function(){
	return shuffle(data);
};


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
