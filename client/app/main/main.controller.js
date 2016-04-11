'use strict';

(function() {

class MainController {

  constructor(Auth, Trainees, Votes, mtImgLetter) {
    this.Auth = Auth;
    this.Votes = Votes;
    this.imgProxy = mtImgLetter;

    this.trainees = [];
    Trainees.query().$promise.then(response => {
      this.trainees = response;
    });
  }

  vote(trainee) {
    this.Votes.increment(trainee);
  }
}

angular.module('mtApp')
  .controller('MainController', MainController);
})();
