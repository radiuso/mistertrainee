'use strict';

describe('Service: mtImgLetter', function () {

  // load the service's module
  beforeEach(module('mtApp'));

  // instantiate service
  var mtImgLetter;
  beforeEach(inject(function (_mtImgLetter_) {
    mtImgLetter = _mtImgLetter_;
  }));

  it('should do something', function () {
    expect(!!mtImgLetter).toBe(true);
  });

});
