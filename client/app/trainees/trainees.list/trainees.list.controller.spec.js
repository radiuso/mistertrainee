'use strict';

describe('Controller: TraineesListCtrl', function () {

  // load the controller's module
  beforeEach(module('mtApp'));

  var TraineesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraineeListCtrl = $controller('TraineesListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
