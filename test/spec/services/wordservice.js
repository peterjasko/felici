'use strict';

describe('Service: Wordservice', function () {

  // load the service's module
  beforeEach(module('bonmotApp'));

  // instantiate service
  var Wordservice;
  beforeEach(inject(function (_Wordservice_) {
    Wordservice = _Wordservice_;
  }));

  it('should do something', function () {
    expect(!!Wordservice).toBe(true);
  });

});
