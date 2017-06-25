'use strict';

describe('myApp.view2 module', function() {
  var $scope, $timeout, infoManagerService, $routeParams, mapservice, $controller;

  beforeEach(module('myApp.view2'));

  afterEach(function () {
    console.log();
  });

  beforeEach(function () {
    module(function ($provide) {
      $provide.value('$scope', $scope);
      $provide.value('$timeout', $timeout);
      $provide.value('infoManagerService', infoManagerService);
      $provide.value('$routeParams', $routeParams);
      $provide.value('mapservice', mapservice);
    });
  });

  $controller = {
    $scope: $scope,
    timeout: $timeout,
    infoManagerService: infoManagerService,
    routeParams: $routeParams,
    mapservice: mapservice
  };

});