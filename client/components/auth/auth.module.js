'use strict';

angular.module('radiusApp.auth', [
  'radiusApp.constants',
  'radiusApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
