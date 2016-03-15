'use strict';

angular.module('mtApp')
  .controller('TraineeListCtrl', function (trainee) {
    this.trainees = [];

    trainee.query().$promise.then((response) => {
      this.trainees = response;
    });

    this.vote = function(traineeId) {
      console.log(traineeId);
    };
  });
