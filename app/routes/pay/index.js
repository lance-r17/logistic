'use strict';
var Pay = require('../../../app/controllers/pay.server.controller.js'),
		getBundle = require('../../../app/lib/getBundle');


module.exports = function (router) {

	/**
	 * Send information to PayPal
	 */
	router.post('/', getBundle, function (req, res) {

		Pay.byPaypal(req, res);

	});

};