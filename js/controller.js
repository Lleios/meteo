
angular.module('meteoApp')
    .controller('meteoController', function($scope, villes, $stateParams) {
        console.log(villes);
        $scope.villes = villes.name;
        $scope.country = villes.country;
        $scope.temp = villes.main.temp;
        $scope.icon = 'http://openweathermap.org/img/w/'+villes.weather[0].icon+'.png'
        console.log($scope.icon);
        
});
