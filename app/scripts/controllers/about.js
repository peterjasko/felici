'use strict';

/**
 * @ngdoc function
 * @name bonmotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bonmotApp
 */
angular.module('bonmotApp')
  .controller('AboutCtrl', function () {
    var self = this;
    self.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Carrots'
    ];
  });
