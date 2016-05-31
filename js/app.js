var app = angular.module('meteoApp', ['ui.router', 'restangular']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/meteo');

    $stateProvider
      .state('meteo', {
        url: '/meteo',
        template: '  <input ng-model="ville"></input> <button type="button" ui-sref="meteo.ville({ville: ville})">Rechercher</button> <div ui-view></div>',
      })
      .state('meteo.ville', {
        url: '/ville/:ville',
        template: '<table ng-repeat="ville in villes"><tr>{{ville}}</tr></table><div ui-view></div>',
        controller: function($scope, choixVilles){
          $scope.villes = choixVilles;
        },
        resolve: {
          choixVilles: function($scope, Restangular){
            debugger;
            _.contains = _.includes;
            return Restangular.oneUrl('weather?q='+$scope.ville).get();
          }
        }
      });
  });

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('api.openweathermap.org/data/2.5');
    RestangularProvider.setRequestSuffix('&APPID={dd81659090b16aafb5e4a2c7a176b6af}');
});
