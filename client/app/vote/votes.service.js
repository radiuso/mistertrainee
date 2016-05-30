'use strict';

angular.module('mtApp')
  .service('Votes', function (Trainees, $http) {
    return {
      create: function(trainee, user, vote) {
        return $http({
          method:'POST',
          url:'/api/votes',
          data: {
            trainee: trainee,
            user: user,
            vote: vote
          }
        });
      },
      up: function(trainee, user) {
        return this.create(trainee, user, 1);
      },
      down: function(trainee, user) {
        return this.create(trainee, user, -1);
      },
      getTodays: function(user) {
        return $http({
          method: 'GET',
          url: '/api/votes/user/' + user._id
        });
      }
    }
  });
