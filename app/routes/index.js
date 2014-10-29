'use strict';

var index = require('../../app/controllers/index.server.controller.js')

module.exports = function (router) {

	router.get('/', function (req, res) {
		index.index(req, res);
	});

  router.get('/setLanguage/:locale', function (req, res) {
    index.setLocale(req, res);
  });
};
