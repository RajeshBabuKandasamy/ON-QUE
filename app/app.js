'use strict';

// Declare app level module which depends on views, and components
var OnqueApp = angular.module('OnqueApp', ['ui.router','onqueAppConfig']);

OnqueApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('home', {
		url : '/home',
		templateUrl : 'modules/home/home.html',
		controller : 'homeController'
 });
   $stateProvider.state('appointment', {
		url : '/appointment',
		templateUrl : 'modules/appointment/appointment.html',
		
 });

$urlRouterProvider.otherwise('/home');

}]);