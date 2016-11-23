var myApp = angular.module('myApp',[]);
myApp.controller('HelloWorldController', ['$scope', function($scope) {
    $scope.greeting = 'Hello World!';
}]);