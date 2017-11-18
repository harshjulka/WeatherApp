(function() {
  'use strict';
  var myapp = angular.module('home');
  myapp.directive('weatherIcon', function() {
    return {
        restrict: 'E', 
        replace: true,
        scope: {
            weather: '@'
        },
        controller: function($scope) {
            $scope.imgurl = function() {
              var baseUrl = "http://openweathermap.org/img/w/"
                return baseUrl + $scope.weather +".png";
            };
        },
        template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
    };
});
})();