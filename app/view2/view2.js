'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:city', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]).controller('View2Ctrl', function($scope, $timeout, infoManagerService, $routeParams, mapservice) {

    $scope.cityHistory_ = JSON.parse($routeParams.city);
    $scope.city = $scope.cityHistory_.name;
    $scope.cityHistory = mapservice.getHistory($scope.cityHistory_.name);
    $scope.dataHistory = JSON.parse($scope.cityHistory);

    $scope.labels   = [];
    $scope.data     = [];

    angular.forEach(JSON.parse($scope.cityHistory), function(item, key){
        $scope.labels.push(item.date);
        $scope.data.push(item.temp.temp);
    });

    $scope.series = [$scope.city];

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ]
        }
    };

    

});