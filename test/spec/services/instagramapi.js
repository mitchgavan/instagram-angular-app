'use strict';

describe('Service: instagramAPI', function () {

  // load the service's module
  beforeEach(module('instaApp'));

  // instantiate service
  var instagramAPI;
  beforeEach(inject(function (_instagramAPI_) {
    instagramAPI = _instagramAPI_;
  }));

  it('should do something', function () {
    expect(!!instagramAPI).toBe(true);
  });

});
