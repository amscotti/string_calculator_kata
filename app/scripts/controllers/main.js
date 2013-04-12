'use strict';

stringCalculatorKataApp.controller('MainCtrl', function($scope) {
  $scope.add = function (input) {
  	if(input === ""){ return 0; }

	var delimiter = /,|\n/;
	if(input.match(/\/\/(.)\n/) !== null){
		delimiter = input.match(/\/\/(.)\n/)[1]
		input = input.replace(/\/\/(.)\n/, "")
	}

	var sum = input.split(delimiter).reduce(function(x, y) { 
		return parseInt(x, 10) + parseInt(y, 10)
	}, 0);

	return sum;
  };

});
