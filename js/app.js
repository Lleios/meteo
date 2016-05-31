var app = angular.module('meteoApp', ['ui.router', 'restangular']);

app.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://api.openweathermap.org/data/2.5');
    RestangularProvider.setRequestSuffix('&appid=dd81659090b16aafb5e4a2c7a176b6af');
    $urlRouterProvider.otherwise('/meteo');

    $stateProvider
      .state('meteo', {
        url: '/meteo',
        template: '<input ng-model="ville"></input> <button type="button" ui-sref="meteo.ville({ville: ville})">Rechercher</button> <div ui-view></div>',
      })
      .state('meteo.ville', {
        url: '/ville/:ville',
        template: '{{villes}}<div ui-view></div>',
        controller: "meteoController"
      });
  });
