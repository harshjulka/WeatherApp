(function () {
  'use strict';

  angular
    .module('weatherApp')
    .config(config);

  function config($routeProvider, $locationProvider) {
     $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}());

/*(function () {
  'use strict';

  angular
    .module('weatherApp')
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider.when('/home',{
    	controller: 'HomeCtrl',
    	controllerAs: 'home',
    	templateUrl: 'home/home.tpl.html'
    })

    $routeProvider.otherwise({
      redirectTo: '/home'
    });

    $locationProvider.html5Mode(true);
  }
}());
*/