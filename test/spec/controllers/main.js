'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('stringCalculatorKataApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

   describe('add()', function() {

    it('should return 0 for empty string', function() {
       expect(scope.add("")).toBe(0);
    });

    it('should return a number as a int', function() {
      expect(scope.add("1")).toBe(1);
    });

    it('should return sum of given numbers', function() {
       expect(scope.add("1,2")).toBe(3);
    });

    it('should return sum of any unknown amount of numbers', function() {
       expect(scope.add("1,2,3")).toBe(6);
       expect(scope.add("1,2,3,4,6,7,8")).toBe(31);
    });

    it('should return sum when a newline is used instead of a commas', function() {
       expect(scope.add("1\n2,3")).toBe(6);
    });

    it('should support different delimiters', function() {
      expect(scope.add("//;\n1;2")).toBe(3);

    });

    

  });
});
