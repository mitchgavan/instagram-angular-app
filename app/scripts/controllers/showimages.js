'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:ShowimagesCtrl
 * @description
 * # ShowimagesCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
  .controller('ShowImagesCtrl', function ($scope, InstagramAPI) {
    $scope.data = {};
    $scope.dataLoaded = false;
    InstagramAPI.fetchPopular(function(data){
      $scope.pics = data;
      $scope.dataLoaded = true;
    });
  });
