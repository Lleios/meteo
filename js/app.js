angular.module('meteoApp', ['ui.router', 'restangular'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/meteo');

    $stateProvider
      .state('meteo', {
        url: '/meteo',
        template: '<div ui-view></div>',
      });
