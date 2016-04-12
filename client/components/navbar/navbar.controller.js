'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Mister Trainee',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $mdSidenav, mtEvents) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.$mdSidenav = $mdSidenav;

    var vm = this;
    mtEvents.on('login', function() {
      vm.closeLoginSidenav();
    });
    mtEvents.on('signup', function() {
      vm.closeSignUpSidenav();
    });
  }

  openLoginSidenav() {
    if(!this.$mdSidenav('loginSidenav').isOpen()) {
      this.$mdSidenav('loginSidenav').open();
    }
  }
  closeLoginSidenav() {
    this.$mdSidenav('loginSidenav').close();
  }
  openSignUpSidenav() {
    if(!this.$mdSidenav('signUpSidenav').isOpen()) {
      this.$mdSidenav('signUpSidenav').open();
    }
  }
  closeSignUpSidenav() {
    this.$mdSidenav('signUpSidenav').close();
  }
}

angular.module('mtApp')
  .controller('NavbarController', NavbarController);
