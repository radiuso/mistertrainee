'use strict';

(function() {

class MainController {

  constructor(Trainees) {
    this.trainees = [];
    Trainees.query().$promise.then(response => {
      this.trainees = response;
    });
  }
}

angular.module('mtApp')
  .controller('MainController', MainController);
})();
