'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
