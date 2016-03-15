'use strict';

describe('Service: trainee', function () {

  // load the service's module
  beforeEach(module('mtApp'));

  // instantiate service
  var trainee;
  beforeEach(inject(function (_trainee_) {
    trainee = _trainee_;
  }));

  it('should do something', function () {
    expect(!!trainee).toBe(true);
  });

});
