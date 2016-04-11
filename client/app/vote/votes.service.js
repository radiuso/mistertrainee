'use strict';

angular.module('mtApp')
  .service('Votes', function (Trainees) {
    return {
      increment: function(trainee, user) {
        trainee.vote = _.isNil(trainee.vote) ? 1 : trainee.vote + 1;
        Trainees.update({ id:trainee._id }, trainee);
      },
      decrement: function(trainee, user) {
        trainee.vote = trainee.vote - 1;
        Trainees.update({ id:trainee._id }, trainee);
      }
    }
  });
