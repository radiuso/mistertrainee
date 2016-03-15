'use strict';

describe('Controller: TraineeListCtrl', function () {

  // load the controller's module
  beforeEach(module('mtApp'));

  var TraineeListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraineeListCtrl = $controller('TraineeListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
