'use strict';

angular.module('mtApp')
  .service('Trainees', function ($resource) {
    return $resource('/api/trainees/:id', { id: '@_id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
  });
