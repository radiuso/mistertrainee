'use strict';

angular.module('mtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trainee', {
        url: '/trainee/:id',
        templateUrl: 'app/trainee/trainee.html',
        controller: 'TraineeCtrl'
      });
  });
