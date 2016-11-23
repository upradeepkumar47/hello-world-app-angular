'use strict';

describe('demoApp', function() {

  beforeEach(module('demoApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('demoApp controller', function() {

    it('demoController is defined', function() {
      var $scope = {};
      var controller = $controller('demoController', { $scope: $scope });
      expect(controller).toBeDefined();
    });
    

  });
});