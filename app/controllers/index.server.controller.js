'use strict';

var Product = require('../models/product');

exports.index = function (req, res) {

	Product.find(function (err, prods) {
		if (err) {
			console.log(err);
		}

    prods.forEach(function (prod) {
      prod.prettyPrice = prod.prettyPrice();
    });

		var model = {
			products: prods
		};
		res.render('index', model);
	});
};

exports.setLocale = function (req, res) {
	res.cookie('locale', req.params.locale);
  res.redirect('/');
};