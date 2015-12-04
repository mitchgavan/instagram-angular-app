'use strict';

/**
 * @ngdoc service
 * @name instaApp.InstagramModel
 * @description
 * # InstagramModel
 * Factory in the instaApp.
 */

angular
  .module('instaApp')
  .factory('InstagramModel', function ($http, CLIENT_ID) {
    
    var InstagramModel = {};
  
    InstagramModel.getPopular = function(callback) {
          
        var endpoint = [
          'https://api.instagram.com/v1/media/popular?count=50&client_id=', 
          CLIENT_ID, 
          '&callback=JSON_CALLBACK'
        ].join('');
          
        $http.jsonp(endpoint).success(function(response){
            callback(response.data);
        });
        
    };
    
    return InstagramModel;
    
  });
