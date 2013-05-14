'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('introtokarmaApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('multiplyCtrl', {
      $scope: scope
    });
  }));

  it('should multiply two valid numbers', function () {
    scope.Multiply(3, 4);
    expect(scope.result).toBe(12);
  });

  it('should multiply two valid numbers with one being zero', function () {
        scope.Multiply(3, 0);
        expect(scope.result).toBe(0);
  });

  it('should multiply two valid negative numbers', function () {
        scope.Multiply(-3, -4);
        expect(scope.result).toBe(12);
  });

  it('should multiply two valid numbers with one being negative number', function () {
        scope.Multiply(3, -4);
        expect(scope.result).toBe(-12);
  });
});
