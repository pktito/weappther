'use strict';

angular.module('myApp.mapService', []).factory('mapservice', function($http, $interval){
    var factory = {};
    var citiesCollection = {};
    var cities = [];

    factory.initCities = function(citiesSearch){
        CallApiWeather(citiesSearch);
        $interval(function(){
            CallApiWeather(citiesSearch);
        },180000);
    };

    function CallApiWeather (citiesSearch){
        angular.forEach(citiesSearch, function(item, key){
            $http.get('http://api.openweathermap.org/data/2.5/weather?q='+item+'&APPID=78dcd282a97a54c35d863a366e660842&units=metric')
                .then(function(citiesResponse){
                    cities.push(citiesResponse.data);
                    var oldItems = JSON.parse(window.localStorage.getItem(citiesResponse.data.name)) || [];
                    var newItem = {
                        city : citiesResponse.data.name,
                        temp : citiesResponse.data.main,
                        date : timeConverter(citiesResponse.data.dt)
                    };
                    oldItems.push(newItem);
                    window.localStorage.setItem(citiesResponse.data.name, JSON.stringify(oldItems));
                }).catch(function(error){
                    console.error("API WEATHER : ERROR " + error);
            });
        });
        citiesCollection = cities;
    }

    function timeConverter (timeStamp){
        var a = new Date(timeStamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    factory.getHistory = function (city){
        return window.localStorage.getItem(city);
    };

    factory.printCities = function (){
        var map = new google.maps.Map(document.getElementById('map_div'), {
            center: {lat: citiesCollection[0].coord.lat, lng: citiesCollection[0].coord.lon},
            zoom: 3
        });

        angular.forEach(citiesCollection, function(item, key){
            var marker = new google.maps.Marker({
                position: {lat: item.coord.lat, lng: item.coord.lon},
                map: map,
                customInfo: item.name,
                title: item.name
            });

            var contentString = "La temperatura actual es : "+item.main.temp+"ºC'" +
                "<a href='#!/view2/"+JSON.stringify(item)+"'>More</a>";

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        });
    };

    return factory;
});