'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Mister Trainee',
    'state': 'main'
  }, {
    'title': 'Trainees',
    'state': 'trainees-list'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('mtApp')
  .controller('NavbarController', NavbarController);
