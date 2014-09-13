'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('VideoCtrl', function($scope) {
    /**---------- 测试数据 ------------**/
    var testData1 = [{
        img: 'http://r4.ykimg.com/050C000053F0D7966737B344EB05190B',
        name: '测试视屏1',
        time: 1.2,
        timeunit: '小时',
        videourl: ''
    }, {
        img: 'http://r4.ykimg.com/051500005410FC476737B325230E59D9',
        name: '测试视屏2',
        time: 36,
        timeunit: '分钟',
        videourl: ''
    }, {
        img: 'http://r4.ykimg.com/0515000054138E6B6737B3251F0067D2',
        name: '测试超长名字测试超长名字测试超长名字测试超长名字测试超长名字测试超长名字测试超长名字测试超长名字测试超长名字测试超长名字',
        time: 12,
        timeunit: '分钟',
        videourl: ''
    }, {
        img: 'http://r1.ykimg.com/051500005413B2386737B34DC7085A19',
        name: '测试视屏',
        time: 36,
        timeunit: '分钟',
        videourl: ''
    }, {
        img: 'http://r1.ykimg.com/051500005413B2386737B34DC7085A19',
        name: '测试视屏',
        time: 36,
        timeunit: '分钟',
        videourl: ''
    }, {
        img: 'http://r1.ykimg.com/051500005413B2386737B34DC7085A19',
        name: '测试视屏',
        time: 36,
        timeunit: '分钟',
        videourl: ''
    }, {
        img: 'http://r1.ykimg.com/051500005413B2386737B34DC7085A19',
        name: '测试视屏',
        time: 36,
        timeunit: '分钟',
        videourl: ''
    }, {
        img: 'http://r1.ykimg.com/051500005413B2386737B34DC7085A19',
        name: '测试视屏',
        time: 36,
        timeunit: '分钟',
        videourl: ''
    }];

    /**---------- 交互数据 ------------**/
    $scope.activetab = {
        video: 'active'
    };

    $scope.localNums = 14;

    $scope.videolist = testData1;

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