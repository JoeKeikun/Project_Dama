'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('ChatCtrl', function($scope) {
    $scope.activetab = {
        chat: 'active'
    };

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