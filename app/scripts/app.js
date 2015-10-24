'use strict';

/**
 * @ngdoc overview
 * @name bonmotApp
 * @description
 * # bonmotApp
 *
 * Main module of the application.
 */
angular
  .module('bonmotApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/editWord/:word', {
        templateUrl: 'views/editword.html',
        controller: 'EditWordCtrl',
        controllerAs: 'editWord'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default') //.dark()
      .primaryPalette('pink', {
        'default' : '800',
        'hue-1': '700'
      })
      
      .accentPalette('blue');
  });
