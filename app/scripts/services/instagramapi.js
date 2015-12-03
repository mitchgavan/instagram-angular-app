'use strict';

/**
 * @ngdoc service
 * @name instaApp.instagramAPI
 * @description
 * # instagramAPI
 * Factory in the instaApp.
 */

angular
  .module('instaApp')
  .factory('InstagramService', function ($http, CLIENT_ID) {
    
    var InstagramService = {};
  
    InstagramService.getPopular = function(callback) {
      
        var endpoint = 'https://api.instagram.com/v1/media/popular';
          endpoint += '?count=99';
          endpoint += '&client_id=' + CLIENT_ID;
          endpoint += '&callback=JSON_CALLBACK';
          
        $http.jsonp(endpoint).success(function(response){
            callback(response.data);
        });
        
    };
    
    return InstagramService;
    
  });
