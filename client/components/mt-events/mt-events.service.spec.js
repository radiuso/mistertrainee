'use strict';

describe('Service: mtEvents', function () {

  // load the service's module
  beforeEach(module('mtApp'));

  // instantiate service
  var mtEvents;
  beforeEach(inject(function (_mtEvents_) {
    mtEvents = _mtEvents_;
  }));

  it('should do something', function () {
    expect(!!mtEvents).toBe(true);
  });

});
