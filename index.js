'use strict';
var newrelic = require('newrelic');
var soajs = require('soajs');

var controller = new soajs.server.controller();
controller.init(function () {
    controller.start();
});

