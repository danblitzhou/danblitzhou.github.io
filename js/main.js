angular.module('ViewSwitchApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/home', {templateUrl: 'templates/home.html'})
  .when('/education', {templateUrl: 'templates/education.html'})
  .when('/skills', {templateUrl: 'templates/skills.html'})
  .when('/contact', {templateUrl: 'templates/contact.html'})
  .otherwise({redirectTo: '/'});
}]);
