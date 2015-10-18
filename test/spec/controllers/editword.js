'use strict';

describe('Controller: EditwordCtrl', function () {

  // load the controller's module
  beforeEach(module('bonmotApp'));

  var EditwordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditwordCtrl = $controller('EditwordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditwordCtrl.awesomeThings.length).toBe(3);
  });
});
