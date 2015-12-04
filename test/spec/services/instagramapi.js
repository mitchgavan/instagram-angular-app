'use strict';

describe('Service: InstagramModel', function () {

  // load the service's module
  beforeEach(module('instaApp'));

  // instantiate service
  var InstagramModel;
  beforeEach(inject(function (_InstagramModel_) {
    InstagramModel = _InstagramModel_;
  }));

  it('should do something', function () {
    expect(!!InstagramModel).toBe(true);
  });

});
