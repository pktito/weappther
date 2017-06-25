'use strict';

// Declare app level module which depends on views, and components
  angular.module('myApp', [
      'ngRoute',
      'myApp.view1',
      'myApp.view2',
      'myApp.mapService',
      'myApp.infoManager',
      'chart.js'
  ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo: '/view1'});

}]).run(function(mapservice){
      var citiesSearch = ['Santiago', 'Buenos Aires', 'Lima', 'Sao Pablo'];
      mapservice.initCities(citiesSearch);
  });
