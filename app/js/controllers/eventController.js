(function() {
  "use strict";
  angular.module('eventsApp')
    .controller('eventController', function eventController($scope) {
      $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30am',
        location: {
          address: 'Google HQ',
          city: 'Mountain View',
          province: 'CA'
        },
        imageUrl: 'https://loiane.gallerycdn.vsassets.io/extensions/loiane/angular-extension-pack/0.5.2/1510228223465/Microsoft.VisualStudio.Services.Icons.Default',
        sessions: [{
            name: 'Directives Masterclass',
            creator: 'Mona',
            duration: '1 hr',
            level: 'Beginner',
            abstract: 'Learn the ins and outs of direvctives',
            upVoteCount: 0
          },
          {
            name: 'Two way binding',
            creator: 'Getty',
            duration: '2 hr',
            level: 'Advanced',
            abstract: 'Learn all about two way binding in Angular',
            upVoteCount: 0
          }
        ]
      };
      $scope.upVoteSession = function(session) {
        session.upVoteCount++;
      };
      $scope.downVoteSession = function(session) {
        session.upVoteCount--;
      };
    });
}());