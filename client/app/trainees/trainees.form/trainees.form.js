'use strict';

angular.module('mtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trainees-form', {
        url: '/trainees/form/:id?',
        templateUrl: 'app/trainees/trainees.form/trainees.form.html',
        controller: 'TraineesFormCtrl',
        controllerAs: 'vm'
      });
  });
