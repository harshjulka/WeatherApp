(function() {
  'use strict';

  angular.module('home')
    .filter('tempFilter', [
      function() {
        return function(K, format) {
          var value = parseInt(K, 10),
              convertedValue;

          if (isNaN(value)) throw new Error('Input is not a number');

          if (format === 'F') {
            convertedValue = Math.round((K * 9/5) - 459.67);
            convertedValue = convertedValue + "\u00B0"+"F";
          } else if (format === 'C') {
            convertedValue = Math.round(K - 273.15);
            convertedValue = convertedValue + "\u00B0" + "C";
          } else {
            throw new Error('Not a valid scale');
          }

          return  convertedValue;
        };
      }
    ]);
})();