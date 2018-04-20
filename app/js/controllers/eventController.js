(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('eventController', function eventController($scope, eventData) {
      $scope.sortorder = 'name';
      $scope.event = eventData.event;
      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };
      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    });
}());