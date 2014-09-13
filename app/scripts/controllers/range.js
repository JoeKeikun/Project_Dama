'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:RangeCtrl
 * @description
 * # RangeCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('RangeCtrl', function($scope) {
    /**---------- 测试数据 ------------**/
    var testData1 = [{
        no: 1,
        img: 'http://chat.xuxu.in/assets/img/mr-laoluo@2x.png',
        name: 'laoluo',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 2,
        img: 'http://chat.xuxu.in/assets/img/majiajia@2x.png',
        name: 'majiajia',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 3,
        img: 'http://chat.xuxu.in/assets/img/williwu@2x.png',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 4,
        img: 'http://chat.xuxu.in/assets/img/williwu@2x.png',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 5,
        img: 'http://chat.xuxu.in/assets/img/williwu@2x.png',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 6,
        img: 'http://chat.xuxu.in/assets/img/williwu@2x.png',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 7,
        img: 'http://chat.xuxu.in/assets/img/williwu@2x.png',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }];

    var testData2 = [{
        no: 1,
        img: 'http://chat.xuxu.in/assets/img/majiajia@2x.png',
        name: 'majiajia',
        score: 86,
        dis: 100,
        disUnit: '米'
    }];


    /**---------- 交互数据 ------------**/
    $scope.activetab = {
        range: 'active',
    };

    $scope.rangeDistance = '100米内';

    $scope.rangetype = {
        day: 'active'
    };

    $scope.rangelist = testData1;

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

    // 下拉按钮
    $scope.rangeDistance100 = function() {
        $scope.rangeDistance = '100米内';
    };
    $scope.rangeDistance500 = function() {
        $scope.rangeDistance = '500米内';
    };
    $scope.rangeDistance1000 = function() {
        $scope.rangeDistance = '1公里内';
    };
    $scope.rangeDistance10000 = function() {
        $scope.rangeDistance = '10公里内';
    };

    // 类别切换
    $scope.rangeDayType = function() {
        $scope.rangetype = {
            day: 'active'
        };

        $scope.rangelist = testData1;
    };
    $scope.rangeMonthType = function() {
        $scope.rangetype = {
            month: 'active'
        };

        $scope.rangelist = testData2;
    };
    $scope.rangeSeasonType = function() {
        $scope.rangetype = {
            season: 'active'
        };

        $scope.rangelist = testData2;
    };
    $scope.rangeYearType = function() {
        $scope.rangetype = {
            year: 'active'
        };

        $scope.rangelist = testData2;
    };

    // 分享到微信
    $scope.sharetoweixin = function() {
        window.alert('sharetoweixin');
    };
});