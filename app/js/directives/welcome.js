(function() {
  angular.module('eventsApp')
    .directive('welcome', function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
      };
    });
}());