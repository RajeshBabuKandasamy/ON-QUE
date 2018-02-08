'use strict';

// Declare app level module which depends on views, and components
var OnqueApp = angular.module('OnqueApp', ['ui.router','ngAnimate', 'ngDialog', 'onqueAppConfig']);

OnqueApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('home', {
		url : '/home',
		templateUrl : 'modules/home/home.html',
		controller : 'homeController'
 }).state('appointment', {
		url : '/appointment',
		templateUrl : 'modules/appointment/appointment.html',
		controller : 'appointmentController'		
 });

$urlRouterProvider.otherwise('/home');

}]);