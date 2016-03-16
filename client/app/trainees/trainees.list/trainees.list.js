'use strict';

angular.module('mtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trainees-list', {
        url: '/trainees/list',
        templateUrl: 'app/trainees/trainees.list/trainees.list.html',
        controller: 'TraineesListCtrl',
        controllerAs: 'vm'
      });
  });
