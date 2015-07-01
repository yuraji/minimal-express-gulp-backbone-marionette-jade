# Minimal Express Backbone-Marionette Gulp Jade Application

[![Book session on Codementor](https://cdn.codementor.io/badges/book_session_github.svg)](https://www.codementor.io/yurio) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/ylinnyk)
[![Donate with Gratipay](https://img.shields.io/gratipay/yuraji.svg)](https://gratipay.com/~yuraji/)

## Minimal application workflow that uses:

- Express.js
- Jade for backend and frontend
- Gulp + Browserify for frontend workflow building
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

