'use strict';

describe('Service: animocons', function () {

  // load the service's module
  beforeEach(module('mtApp'));

  // instantiate service
  var animocons;
  beforeEach(inject(function (_animocons_) {
    animocons = _animocons_;
  }));

  it('should do something', function () {
    expect(!!animocons).toBe(true);
  });

});
