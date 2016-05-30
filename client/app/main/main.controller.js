'use strict';

(function() {

class MainController {

  constructor(Auth, Trainees, Votes, mtImgLetter, $mdToast, mtEvents, socket, $scope) {
    this.Auth = Auth;
    this.Votes = Votes;
    this.imgProxy = mtImgLetter;
    this.nbActions = null;
    this.toast = $mdToast;

    this.trainees = [];
    Trainees.query().$promise.then(response => {
      this.trainees = response;

      socket.syncUpdates('trainee', this.trainees);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('trainee');
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
        .catch((res) => { this.handleVoteFailed(res); });
    });
  }

  voteDown(trainee) {
    this.Auth.getCurrentUser().$promise.then((user) => {
      this.Votes.down(trainee, user)
        .then(() => { this.handleVoteSuccess(); })
        .catch((res) => { this.handleVoteFailed(res); });
    });
  }

  handleVoteSuccess() {
    this.nbActions--;
  }
  
  handleVoteFailed(res) {
    switch (res.status) {
      case 423:
        this.toast.show(
          this.toast.simple()
            .textContent('No action left mother fucker!')
        );
        break;
      default:
        this.toast.show(
          this.toast.simple()
            .textContent('An error occured')
        );
    }
  }
}

angular.module('mtApp')
  .controller('MainController', MainController);
})();
