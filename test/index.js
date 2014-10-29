/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    request = require('supertest'),
    spec = require('../app/lib/spec'),
    path = require('path');


describe('/', function () {

  var app, mock;


  beforeEach(function (done) {
    app = express();
    app.on('start', done);
    console.log(__dirname);
    app.use(kraken({
      basedir: process.cwd(), // load config with correct path
      onconfig: spec(app).onconfig
    }));

    mock = app.listen(1337);

  });


  afterEach(function (done) {
    mock.close(done);
  });


  it('should say "hello"', function (done) {
    request(mock)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .expect(/Hello, /)
      .end(function (err, res) {
          done(err);
      });
  });

});