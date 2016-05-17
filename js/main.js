angular.module('ViewSwitchApp', ['ngRoute'])
.controller('ProjectsController', function($scope, $routeParams) {
  $(document).ready(function() {
    $('.modal-trigger').leanModal();
    $('.slider').slider();
  });
})
.controller('ExperienceController', function($scope, $routeParams) {
  $(document).ready(function() {
    $(".collapsible").collapsible();
  });
})
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/home', {templateUrl: 'templates/home.html'})
  .when('/experience', {templateUrl: 'templates/experience.html'})
  .when('/skills', {templateUrl: 'templates/skills.html'})
  .when('/projects', {
    templateUrl: 'templates/projects.html',
    controller: 'ProjectsController'
})
  .otherwise({redirectTo: '/home'});
}]);
