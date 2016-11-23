describe('Hello World example ', function() {

    beforeEach(module('myApp'));

    var HelloWorldController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        HelloWorldController = $controller('HelloWorldController', {
            $scope: scope
        });
    }));
    it('should say hello world', function () {
        expect(scope.greeting).toEqual("Hello World!");
    });

});