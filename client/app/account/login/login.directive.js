'use strict';

angular.module('mtApp')
  .directive('login', () => ({
    templateUrl: 'app/account/login/login.html',
    restrict: 'E',
    controller: 'LoginController',
    controllerAs: 'login'
  }));
