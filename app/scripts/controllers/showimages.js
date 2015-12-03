'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:ShowimagesCtrl
 * @description
 * # ShowimagesCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
  .controller('ShowImagesCtrl', function ($scope, InstagramService) {
    $scope.data = {};
    $scope.dataLoaded = false;
    InstagramService.getPopular(function(data){
      $scope.pics = data;
      $scope.dataLoaded = true;
    });
  });
