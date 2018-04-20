(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('editProfileController', function editProfileController($scope, gravatarUrlBuilder) {
      $scope.avatarUrl = 'https://i.pinimg.com/736x/e1/c3/71/e1c371ed831a3c6b5699cce1b3c6cf0f--kitten.jpg';
      $scope.user = {};

      $scope.getGravatarUrl = function(email) {
        return gravatarUrlBuilder.buildGravatar(email);
      };

    });
}());