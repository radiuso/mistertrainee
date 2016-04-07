'use strict';

(function() {

class MainController {

  constructor(Auth, Trainees, mtImgLetter) {
    this.Auth = Auth;
    this.imgProxy = mtImgLetter;

    this.trainees = [];
    Trainees.query().$promise.then(response => {
      this.trainees = response;
    });
  }
}

angular.module('mtApp')
  .controller('MainController', MainController);
})();
