angular.module('ViewSwitchApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/home', {templateUrl: 'templates/home.html'})
  .when('/experience', {templateUrl: 'templates/experience.html'})
  .when('/skills', {templateUrl: 'templates/skills.html'})
  .when('/projects', {templateUrl: 'templates/projects.html'})
  .otherwise({redirectTo: '/home'});
}]);
