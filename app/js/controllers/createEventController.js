(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('createEventController', function createEventController($scope, eventData, $log) {
      $scope.saveEvent = function(event, newEventForm) {
        if (newEventForm.$valid) {
          eventData.save(event)
            .$promise
            .then(function(response) { console.log('success', response); })
            .catch(function(response) { console.log('failure', response); });
        }
      };
      $scope.cancelEdit = function() {
        $window.location = '/eventDetails.html';
      };
    });
}());