/*jslint node: true */
/*global angular */
'use strict';

/**
 * @ngdoc service
 * @name bonmotApp.Wordservice
 * @description
 * # Wordservice
 * Service in the bonmotApp.
 */
angular.module('bonmotApp')
  .service('WordService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
  
    self.words = [
      { id: 1, word: 'the', frequency: 244472, category: '' }
      
    ];
  });
