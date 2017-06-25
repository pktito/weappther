'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]).controller('View1Ctrl', function(mapservice, $timeout) {

    function initialize () {
        mapservice.printCities();
    }

    $timeout(function() {
        google.maps.event.addDomListener(window, 'load', initialize());
    },1000);

});