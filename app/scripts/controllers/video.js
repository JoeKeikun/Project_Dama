'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('VideoCtrl', function($scope) {
    $scope.activetab = {
        video: 'active'
    };

    $scope.localNums = 14;
});