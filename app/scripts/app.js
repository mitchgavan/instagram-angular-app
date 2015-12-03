'use strict';

/**
 * @ngdoc overview
 * @name instaApp
 * @description
 * # instaApp
 *
 * Main module of the application.
 */
angular
  .module('instaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('CLIENT_ID', '451cf9fc4a0a44379d699e4ca48d58fb')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
