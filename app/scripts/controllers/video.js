'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('VideoCtrl', function($scope) {
    /**---------- 交互数据 ------------**/
    $scope.activetab = {
        video: 'active'
    };

    $scope.localNums = 14;

    //-----------处理函数------------
    // 跳转处理
    $scope.jumpToPage = function(type) {
        switch (type) {
            case 'range':
                location.hash = '#/range';
                break;
            case 'video':
                location.hash = '#/video';
                break;
            case 'chat':
                location.hash = '#/chat';
                break;
            default:
                location.hash = '#/results';
                break;
        }
    };
});