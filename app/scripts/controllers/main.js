'use strict';

stringCalculatorKataApp.controller('MainCtrl', function($scope) {
  $scope.add = function (numbers) {
  	if(numbers.length > 0){
		return numbers.split(/\n|,/).reduce(function(a,b){ 
			return parseInt(a,10) + parseInt(b,10);
		}, "0");
  	} else {
  		return 0;
  	}	
  }
});
