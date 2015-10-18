/*jslint node: true */
/*global angular */
'use strict';

/**
 * @ngdoc function
 * @name bonmotApp.controller:EditwordCtrl
 * @description
 * # EditwordCtrl
 * Controller of the bonmotApp
 */
angular.module('bonmotApp')
  .controller('EditWordCtrl', function ($routeParams, WordService, CategoryService) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    var self = this;
    self.word = $routeParams.word;
  
    self.wordStats = WordService.words[0];
    self.categories = CategoryService.categories;
  
    self.changeCategory = function (category) {
      console.log = "Aha";
      self.wordStats.category = category;
    };
  
    self.changeCategoryByKey = function (keyEvent) {
      console.log = "Baha";
      self.wordStats.category = keyEvent;
      /*for (category in categories) {
        //if (keyEvent.which === 
        self.wordStats.category = keyEvent;
      }*/
    };
  });
