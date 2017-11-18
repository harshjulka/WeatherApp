(function () {
  'use strict';

  angular
    .module('weatherApp')
    .config(config);

  function config($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}());
