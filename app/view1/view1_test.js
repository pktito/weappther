'use strict';

describe('myApp.view1 module', function() {
  var mapservice, $controller;

  beforeEach(module('myApp.view1'));
  afterEach(function () {
    console.log();
  });

  beforeEach(function () {
    module(function ($provide) {
      $provide.value('mapservice', mapservice);
      $provide.value('$timeout', $timeout);
    });
  });

  $controller = {
    mapservice: mapservice
  };

});