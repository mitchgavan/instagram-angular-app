'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
  .controller('MediaCtrl', function ($scope, InstagramModel) {
    $scope.data = {};
    $scope.dataLoaded = false;
    InstagramModel.getPopular(function(data){
      $scope.pics = data;
      $scope.dataLoaded = true;
    });
  });
