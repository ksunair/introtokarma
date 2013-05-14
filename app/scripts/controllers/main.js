'use strict';

var myApp = angular.module('introtokarmaApp', []);

myApp.controller('multiplyCtrl', function($scope){
   $scope.firstNumber = 0;
   $scope.secondNumber = 0;
   $scope.result = 0;
   $scope.decimals = 2;
   $scope.Multiply = function(first, second){
       $scope.result = Number(first) * Number(second);
   }
});