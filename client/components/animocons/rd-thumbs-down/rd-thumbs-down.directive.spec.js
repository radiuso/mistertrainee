'use strict';

describe('Directive: rdThumbsDown', function () {

  // load the directive's module and view
  beforeEach(module('mtApp'));
  beforeEach(module('components/rd-thumbs-down/rd-thumbs-down.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rd-thumbs-down></rd-thumbs-down>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the rdThumbsDown directive');
  }));
});
