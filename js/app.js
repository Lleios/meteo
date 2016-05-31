angular.module('meteoApp', ['ui.router', 'restangular'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/meteo');

    $stateProvider
      .state('meteo', {
        url: '/meteo',
        template: '  <input ng-model="ville"></input> <button type="button">Rechercher</button> <div ui-view></div>',
      });
    });
