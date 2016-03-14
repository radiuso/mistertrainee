'use strict';

angular.module('mtApp.auth', [
  'mtApp.constants',
  'mtApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
