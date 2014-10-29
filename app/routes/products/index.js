/**
 * A very simple product editor
 */
'use strict';

var Product = require('../../controllers/products.server.controller');

module.exports = function (router) {

	/**
	 * Retrieve a list of all products for editing.
	 */
	router.get('/', function (req, res) {
		Product.index(req, res);
	});


	/**
	 * Add a new product to the database.
	 */
	router.post('/', function (req, res) {
		Product.add(req, res);
	});

	/**
	 * Delete a product.
	 * @paaram: req.body.item_id Is the unique id of the product to remove.
	 */
	router.delete('/', function (req, res) {
		Product.delete(req, res);
	});


	/**
	 * Edit a product.
	 */
	router.put('/', function (req, res) {
		Product.edit(req, res);
	});

};
