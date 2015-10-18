/*jslint node: true */
/*global angular */
'use strict';

/**
 * @ngdoc function
 * @name bonmotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bonmotApp
 */
angular.module('bonmotApp')
  .controller('MainCtrl', function ($scope, $mdToast) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.username = 'peter';
  
    $scope.openToast = function ($event) {
      $mdToast.show($mdToast.simple().content('Hello Conrad!'));
      // Could also do $mdToast.showSimple('Hello');
    };
  
  });
