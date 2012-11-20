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
    it('should return 0 for blank string', function() {
      expect(scope.add("")).toBe(0);
    });

    it('should return 1 for "1"', function() {
      expect(scope.add("1")).toBe(1);
    });

    it('should return 3 for "1,2"', function() {
      expect(scope.add("1,2")).toBe(3);
    });

    it('should return 36 for "1,2,3,4,5,6,7,8"', function() {
      expect(scope.add("1,2,3,4,5,6,7,8")).toBe(36);
    });

    it('should return 36 for "9,3,7,3,9,2,1"', function() {
      expect(scope.add("9,3,7,3,9,2,1")).toBe(34);
    });

    it('should return 6 for "1\\n2,3"', function() {
      expect(scope.add("1\n2,3")).toBe(6);
    });


  })

});
