'use strict';

describe('Controller: TraineeCtrl', function () {

  // load the controller's module
  beforeEach(module('mtApp'));

  var TraineeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraineeCtrl = $controller('TraineeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
