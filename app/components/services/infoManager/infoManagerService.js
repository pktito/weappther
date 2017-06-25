'use strict';

angular.module('myApp.infoManager', [])
    .constant('CACHEINFO', {
        CITY: 'CITY'
    })
    .factory('infoManagerService', function($http, CACHEINFO) {

        var factory = {};

        factory.setCity = function(citySelected){
            CACHEINFO.CITY = citySelected;
        };

        factory.getCity = function(){
            return CACHEINFO.CITY;
        };

        return factory;
});