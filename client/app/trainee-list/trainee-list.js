'use strict';

angular.module('mtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trainee-list', {
        url: '/trainee-list',
        templateUrl: 'app/trainee-list/trainee-list.html',
        controller: 'TraineeListCtrl',
        controllerAs: 'vm'
      });
  });
