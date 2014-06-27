'use strict';

// Declare app level module which depends on filters, and services
angular.module('comicApp', ['ngRoute', 'comicApp.controllers']).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'content/home.html'
	});
	$routeProvider.when('/view1', {
		templateUrl : 'content/partial1.html'
	});
	$routeProvider.when('/view2', {
		templateUrl : 'content/partial2.html'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
}]);
