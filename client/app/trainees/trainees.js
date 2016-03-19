'use strict';

angular.module('mtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trainees-list', {
        url: '/trainees/list',
        templateUrl: 'app/trainees/trainees.list/trainees.list.html',
        controller: 'TraineesListCtrl',
        controllerAs: 'vm'
      })
      .state('trainees-form', {
        url: '/trainees/form/:id?',
        templateUrl: 'app/trainees/trainees.form/trainees.form.html',
        controller: 'TraineesFormCtrl',
        controllerAs: 'vm'
      });
  });
