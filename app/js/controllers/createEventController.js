(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('createEventController', function createEventController($scope) {
      $scope.saveEvent = function(event, newEventForm) {
        if (newEventForm.$valid) {
          $scope.event = event;
        }
      };
      $scope.cancelEdit = function() {
        $window.location = '/eventDetails.html';
      };
    });
}());