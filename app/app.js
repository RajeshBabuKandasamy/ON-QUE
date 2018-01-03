'use strict';

// Declare app level module which depends on views, and components
var OnqueApp = angular.module('OnqueApp', ['ngRoute','ui.router']);

OnqueApp.config(['$stateProvider', '$locationProvider', '$routeProvider', function($stateProvider, $locationProvider, $routeProvider) {
  
  $stateProvider.state('home', {
		url : '/home',
		templateUrl : 'modules/home/home.html',
		controller : 'homeController'
 });

 $routeProvider.otherwise({redirectTo: '/home'});

}]);