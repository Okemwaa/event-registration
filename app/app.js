(function() {
  "use strict";
  angular.module('eventsApp', ['ngResource', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('newEvent', {
          url: '/newEvent',
          templateUrl: 'templates/newEvent.html',
          controller: 'createEventController'
        })
        .state('editProfile', {
          url: '/editProfile',
          templateUrl: 'templates/editProfile.html',
          controller: 'editProfileController'
        })
        .state('home', {
          url: '/eventDetails',
          templateUrl: 'templates/eventDetails.html',
          controller: 'eventController'
        })
        .state('home.list', {
          url: '/list',
          templateUrl: 'templates/editProfile.html',
          controller: 'editProfileController'
        });
    });
}());