
angular.module('meteoApp')
    .controller('meteoController', function($scope, Restangular) {


        _.contains = _.includes;
        $scope.villes = Restangular.all('weather?q=Nantes&appid=dd81659090b16aafb5e4a2c7a176b6af').getList().$object;
});
