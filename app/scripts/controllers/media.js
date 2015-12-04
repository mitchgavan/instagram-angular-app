'use strict';

/**
 * @ngdoc function
 * @name instaApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the instaApp
 */
angular.module('instaApp')
  .controller('MediaCtrl', function (InstagramModel) {
    
    var vm = this;
    
    vm.dataLoaded = false;
    vm.pics = [];
    vm.currentlyDisplayedPics = [];
    
    vm.getMore = function () {
      InstagramModel.getPopular(function(data) {
        for(var i=0; i<data.length; i++) {
          if (typeof vm.currentlyDisplayedPics[data[i].id]==='undefined') {
            vm.pics.push(data[i]) ;
            vm.currentlyDisplayedPics[data[i].id] = '1';
          }
        }
        vm.dataLoaded = true;
      });
    };
    
    vm.getMore();
      
  });
