'use strict';
var newrelic = require('newrelic');

require("dnscache")({
  enable: true
});

var soajs = require('soajs');

var controller = new soajs.server.controller();
controller.init(function () {
    controller.start();
});

