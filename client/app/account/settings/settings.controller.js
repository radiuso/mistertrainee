'use strict';

class SettingsController {
  //start-non-standard
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth) {
    this.Auth = Auth;
  }

  changePassword(form) {
    this.submitted = true;
    console.log(form.$valid);
    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('mtApp')
  .controller('SettingsController', SettingsController);
