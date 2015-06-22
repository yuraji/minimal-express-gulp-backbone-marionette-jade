# Minimal Express Backbone-Marionette Gulp Jade Application

Minimal application workflow that uses:

- Express.js
- Jade for backend and frontend
- Gulp for frontend workflow building
- Backbone + Marionette (+ jQuery, + Underscore)
- CoffeeScript


## Express.js for backend

run to start:

	node server.js

## Gulp for front-end workflow

run to watch `/client/js/src` changes:

	gulp


## When run

Express will render jade templates server-side

Then Backbone will render same jade templates frontend-side when `Refresh` requested.


### module `data/links`

Returns list of links in random order.

Express renders this list server-side and you can see it in page source.

These links are also served at `/api/links`.  
Backbone requests this API as a demo of page update and reusing same jade templates.

