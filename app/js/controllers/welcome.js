(function() {
  angular.module('eventsApp')
    .controller('welcomeCtrl', function($scope) {
      $scope.message = 'hello world';
    });
}());