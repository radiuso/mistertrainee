'use strict';

angular.module('mtApp')
  .service('trainee', function ($resource) {
    return $resource('/api/trainees/:id');
  });
