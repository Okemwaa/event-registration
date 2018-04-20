(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('editProfileController', function editProfileController($scope, gravatarUrlBuilder) {
      $scope.user = {};

      $scope.getGravatarUrl = function(email) {
        return gravatarUrlBuilder.buildGravatar(email);
      };

    });
}());