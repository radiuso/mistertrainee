'use strict';

describe('Service: Trainees', function () {

  // load the service's module
  beforeEach(module('mtApp'));

  // instantiate service
  var Trainees;
  beforeEach(inject(function (_Trainees_) {
    Trainees = _Trainees_;
  }));

  it('should do something', function () {
    expect(!!Trainees).toBe(true);
  });

});
