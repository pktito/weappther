'use strict';

describe('mapservice: Service MAP Unit Test', function () {
    var $http, $interval, mapservice;

    beforeEach(module('myApp.mapService'));

    afterEach(function(){
        console.log();
    });

    beforeEach(function () {

        module(function ($provide) {
            $provide.value('$http', $http);
            $provide.value('$interval', $interval);

        });
    });

    beforeEach(inject(function (_mapservice_){
        mapservice = _mapservice_
    }));
});
