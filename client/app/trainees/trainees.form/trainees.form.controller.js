'use strict';

angular.module('mtApp')
  .controller('TraineesFormCtrl', function ($stateParams, $mdToast, $state, Trainees) {
    var id = $stateParams.id;
    this.isNew = _.isNil(id) || id === "";

    if(!this.isNew) {
      Trainees.get({ id: id }).$promise.then((response) => {
        this.traineeForm = response;
      });
    }

    this.submit = () => {
      if(this.isNew) {
        var newTrainee = new Trainees();
        newTrainee.name = this.traineeForm.name;
        newTrainee.nickname = this.traineeForm.nickname;
        newTrainee.year = this.traineeForm.year;

        this.traineeForm = newTrainee;
        this.isNew = false;

        this.traineeForm.$save((response) => {
          console.log("create");
          var toast = $mdToast.simple()
            .textContent('Trainee ' + this.traineeForm.name + ' is created');
          $mdToast.show(toast);
        });

      } else {
        this.traineeForm.$update((response) => {
          console.log("update");
          var toast = $mdToast.simple()
            .textContent('Trainee ' + this.traineeForm.name + ' is updated');
          $mdToast.show(toast);
        });
      }
    };

    this.delete = () => {
      this.traineeForm.$delete((response) => {
        var toast = $mdToast.simple()
          .textContent('Trainee ' + this.traineeForm.name + ' is deleted');
        $mdToast.show(toast);

        $state.go("trainees-list");
      });
    };
  });
