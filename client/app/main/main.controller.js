'use strict';

(function() {

class MainController {

  constructor(Auth, Trainees, Votes, mtImgLetter, $mdToast, mtEvents) {
    this.Auth = Auth;
    this.Votes = Votes;
    this.imgProxy = mtImgLetter;
    this.nbActions = null;
    this.toast = $mdToast;

    this.trainees = [];
    Trainees.query().$promise.then(response => {
      this.trainees = response;
    });

    if(Auth.getCurrentUser().$promise) {
      this.getActions();
    }
    mtEvents.on('login', () => {
      this.getActions();
    });
    mtEvents.on('signup', () => {
      this.getActions();
    });
  }

  getActions() {
    this.Auth.getCurrentUser().$promise.then((user) => {
      this.Votes.getTodays(user)
        .then((res) => {
          this.nbActions = 3 - _.size(res.data);
        });
    });
  }

  voteUp(trainee) {
    this.Auth.getCurrentUser().$promise.then((user) => {
      this.Votes.up(trainee, user)
        .then(() => { this.handleVoteSuccess(); })
        .catch(() => { this.handleVoteFailed(); });
    });
  }

  voteDown(trainee) {
    this.Auth.getCurrentUser().$promise.then((user) => {
      this.Votes.down(trainee, user)
        .then(() => { this.handleVoteSuccess(); })
        .catch(() => { this.handleVoteFailed(); });
    });
  }

  handleVoteSuccess() {
    this.nbActions--;
  }
  handleVoteFailed() {
    this.toast.show(
      this.toast.simple()
        .textContent('No action left mother fucker!')
    );
  }
}

angular.module('mtApp')
  .controller('MainController', MainController);
})();
