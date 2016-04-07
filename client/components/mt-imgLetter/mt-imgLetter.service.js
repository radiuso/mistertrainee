'use strict';

angular.module('mtApp')
  .service('mtImgLetter', function () {

    return {
      getFromName: function(name) {
        if(!_.isNil(name) && name != '') {
          var firstLetter = name[0].toLowerCase();
          return 'https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_' + firstLetter + '_28.png';
        }
        return '';
      }
    };
  });
