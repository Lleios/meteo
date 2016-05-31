
angular.module('meteoApp')
    .controller('meteoController', function($scope, villes, $stateParams) {
        $scope.villes = villes;
});
