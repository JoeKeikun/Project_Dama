'use strict';

/**
 * @ngdoc overview
 * @name damaApp
 * @description
 * # damaApp
 *
 * Main module of the application.
 */
angular.module('damaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angular-gestures'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/results.html',
            controller: 'ResultsCtrl'
        })
        .when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsCtrl'
        })
        .when('/range', {
            templateUrl: 'views/range.html',
            controller: 'RangeCtrl'
        })
        .when('/video', {
            templateUrl: 'views/video.html',
            controller: 'VideoCtrl'
        })
        .when('/chat', {
            templateUrl: 'views/chat.html',
            controller: 'ChatCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});