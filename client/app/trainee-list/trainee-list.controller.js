'use strict';

angular.module('mtApp')
  .controller('TraineeListCtrl', function (trainee) {
    this.trainees = [];

    trainee.query().$promise.then(response => {
      _.each(response, function(d) {
        if(_.isNil(d.img) || d.img == '') {
          var firstLetter = d.name[0].toLowerCase();
          d.img = 'https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_' + firstLetter + '_28.png';
        }
      });
      this.trainees = response;
    });

    this.vote = function(traineeId) {
      // decrease available vote
      // increase trainee note
    };
  });
