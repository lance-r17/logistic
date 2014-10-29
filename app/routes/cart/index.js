'use strict';

var Cart = require('../../../app/controllers/cart.server.controller'),
		getBundle = require('../../../lib/getBundle');

module.exports = function (router) {

	/**
	 * Display the shopping cart
	 */
	router.get('/', getBundle, function (req, res) {

		Cart.index(req, res);

	});

	/**
	 * Add an item to the shopping cart
	 */
	router.post('/', function (req, res) {

		Cart.add(req, res);

	});
};
