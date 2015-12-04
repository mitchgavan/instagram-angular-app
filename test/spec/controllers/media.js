'use strict';

describe('Controller: MediaCtrl', function () {

  // load the controller's module
  beforeEach(module('instaApp'));

  var MediaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaCtrl = $controller('MediaCtrl', {
      $scope: scope
    });
  }));

  it('should attach some data to the scope', function () {
    expect(scope.dataLoaded).toBe(false);
  });
});
