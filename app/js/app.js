'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'ideaHuntServices',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
        when('/ideaHunt/postIdea', {
      templateUrl: 'partials/PostIdea.html',
      controller: 'PostIdeaCtrl'
    }).
    when('/ideaHunt/postIdea2', {
      templateUrl: 'partials/PostIdea2.html',
      controller: 'PostIdeaCtrl'
    }).
    when('/ideaHunt/postIdea3', {
      templateUrl: 'partials/PostIdea3.html',
      controller: 'PostIdeaCtrl'
    }).
    when('/ideaHunt/dashboard', {
      templateUrl: 'partials/MyDashboard.html',
      controller: 'IdeaDashbaordCtrl'
    }).
    when('/ideaHunt/:zone', {
      templateUrl: 'partials/idea-list.html',
      controller: 'ZoneSearchCtrl'
    }).
    when('/ideaHunt/:zone', {
      templateUrl: 'partials/idea-list.html',
      controller: 'ZoneSearchCtrl'
    }).
    when('/IdeaSearch/:ideaId', {
      templateUrl: 'partials/idea-detail.html',
      controller: 'IdeaSearchCtrl'
    }).
    otherwise({
        redirectTo: '/phones'
      });
  }]);
