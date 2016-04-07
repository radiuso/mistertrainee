'use strict';

angular.module('mtApp')
  .directive('signup', () => ({
    templateUrl: 'app/account/signup/signup.html',
    restrict: 'E',
    controller: 'SignupController',
    controllerAs: 'signup'
  }));
