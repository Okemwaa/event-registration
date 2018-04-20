(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('eventController', function eventController($scope, eventData, $log) {
      $scope.sortorder = 'name';
      eventData.getEvent()
        .$promise
        .then(function(event) {
          $scope.event = event;
        })
        .catch(function(response) {
          $log.error(response);
        });
      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };
      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    });
}());