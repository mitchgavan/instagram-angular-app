'use strict';

/**
 * @ngdoc service
 * @name instaApp.instagramAPI
 * @description
 * # instagramAPI
 * Factory in the instaApp.
 */
angular.module('instaApp')
  .factory('InstagramAPI', function ($http) {
    // Service logic
    // ...

    var clientId = '451cf9fc4a0a44379d699e4ca48d58fb';

    // Public API here
    return {
      fetchPopular: function(callback){
        var endpoint = 'https://api.instagram.com/v1/media/popular';
        endpoint += '?count=99';
        endpoint += '&client_id=' + clientId;
        endpoint += '&callback=JSON_CALLBACK';
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    };
  });
