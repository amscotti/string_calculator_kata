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

  describe('Add()', function() {
    it('empty string it should return 0', function() {
      expect(scope.add("")).toBe(0);
    });

    it('a string of 1 number should return that number', function() {
      expect(scope.add("1")).toBe(1);
    });

    it('a string of 2 number should be added', function() {
      expect(scope.add("1,2")).toBe(3);
    });

    it('should handle an unknown amount of numbers', function() {
      expect(scope.add("1,2,3,4,5,6,7,8,9")).toBe(45);
    });

    it('Add method should handle new lines between numbers', function() {
      expect(scope.add("1\n2,3")).toBe(6);
    });

    it('Should be able to set delimiter', function() {
      expect(scope.add("//;\n1;2")).toBe(3);
    });

  });
});
