'use strict';

stringCalculatorKataApp.controller('MainCtrl', function($scope) {
  $scope.add = function(string_numbers) {
  	string_numbers = string_numbers.length ? string_numbers : "0";
	var match = (/\/\/(.)\n/).exec(string_numbers);
	var delimiter = (match === null ? /,|\n/ : match[1]);
	
	if(match !== null){
		string_numbers = string_numbers.replace(match[0], "");  			
	}

  	return string_numbers.split(delimiter).reduce(function(x,y) {
  	 	return parseInt(x, 10) + parseInt(y, 10)
  	}, 0);
  };
});
