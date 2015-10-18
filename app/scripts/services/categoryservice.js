/*jslint node: true */
/*global angular */
'use strict';

/**
 * @ngdoc service
 * @name bonmotApp.Categoryservice
 * @description
 * # Categoryservice
 * Service in the bonmotApp.
 */
angular.module('bonmotApp')
  .service('CategoryService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  
    
    var self = this;
  
    self.categories = [
      { label: 'Common',    keystroke: 'c' },
      { label: 'Bad word (junk)',  keystroke: 'b' },
      { label: 'Good word', keystroke: 'g' }
      /*{ label: 'Known',     keystroke: 'k' },
      { label: 'Unknown',   keystroke: 'u' }*/
    ];
  
  });
