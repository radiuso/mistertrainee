'use strict';

angular.module('mtApp')
  .service('mtEvents', function ($rootScope, $q) {
    return {
      emmit: function(eventName, value) {
        $rootScope.$broadcast(eventName, value);
      },
      once: function(eventName) {
        return $q(function(resolve, reject) {
          $rootScope.$on(eventName, function(event, value) {
            resolve(value);
          });
        });
      }
    };
  });
