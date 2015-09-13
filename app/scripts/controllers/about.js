'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
