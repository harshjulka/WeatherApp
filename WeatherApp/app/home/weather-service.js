var home = angular.module('home');

home.service('weatherService', ['$http', function($http){
	this.fetchWeatherResults = function(city, successHandler){
		var promise = $http.
			get("http://api.openweathermap.org/data/2.5/forecast?q="+city
				+"&appid=b9feb11dd0284ae1a415f94d50777169")
			.then( function(response){
				console.log("service", response);
				successHandler(response.data);
			});
			return promise;
	}
}]);
