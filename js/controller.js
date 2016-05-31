
angular.module('meteoApp')
    .controller('meteoController', function($scope, Restangular) {

        _.contains = _.includes;
        $scope.villes = Restangular.one('weather?q='+$scope.ville).get();
});
