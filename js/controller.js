
angular.module('meteoApp')
    .controller('meteoController', function($scope, Restangular, $stateParams) {

        _.contains = _.includes;
        $scope.villes = Restangular.one('weather?q='+$stateParams.ville).get();
});
