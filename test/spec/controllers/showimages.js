'use strict';

describe('Controller: ShowimagesCtrl', function () {

  // load the controller's module
  beforeEach(module('instaApp'));

  var ShowimagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowimagesCtrl = $controller('ShowimagesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
