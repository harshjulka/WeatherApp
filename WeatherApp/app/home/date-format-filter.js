(function() {
  'use strict';

  angular.module('home')
    .filter('customDate', [
      function() {
        return function(value) {
         var val = new Date(value);
         var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
         var today = day[val.getDay()];
         var date = val.getDate()+ "/"+(val.getMonth() +1);
         var convertedValue  = today + date;
          return  convertedValue;
        };
      }
    ]);
})();