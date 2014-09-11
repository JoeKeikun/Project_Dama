'use strict';

describe('Controller: RangeCtrl', function () {

  // load the controller's module
  beforeEach(module('damaApp'));

  var RangeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RangeCtrl = $controller('RangeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
