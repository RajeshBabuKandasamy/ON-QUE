'use strict';

// Declare app level module which depends on views, and components
var OnqueApp = angular.module('OnqueApp', ['ui.router','onqueAppConfig']);

OnqueApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('home', {
		url : '/home',
		templateUrl : 'modules/home/home.html',
		controller : 'homeController'
 });

$urlRouterProvider.otherwise('/home');

}]);