(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl',['weatherService', '$log', function(weatherService, $log){
      var vm = this;
  
      vm.ctrlName = 'HomeCtrl';
      vm.data = {};
      vm.format = "C";
      vm.cityName = "";
      vm.celcius = "\u00B0"+"C";
      vm.farh = "\u00B0"+"F";
      vm.clicked = false;
      vm.weatherForecast = function(){
        if(vm.cityName){
           vm.clicked = true;
        }
        weatherService.fetchWeatherResults(vm.cityName, vm.successHandler);
      }

      vm.successHandler = function (response) {
        vm.data = response.list;
        $log.debug("api response",vm.data);
      }

      vm.getTime = function(value) {
        return value.split(" ")[1];
      }

    }]);
}());
