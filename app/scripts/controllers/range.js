'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:RangeCtrl
 * @description
 * # RangeCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('RangeCtrl', function($scope) {
    $scope.activetab = {
        range: 'active',
    };

    $scope.rangeDistance = '100米内';

    $scope.rangetype = {
        day: 'active'
    };

    $scope.rangelist = [{
        no: 1,
        img: 'http://su.bdimg.com/static/superplus/img/logo_white_ee663702.png',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 2,
        img: '',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 3,
        img: '',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }, {
        no: 4,
        img: '',
        name: 'aa',
        score: 86,
        dis: 100,
        disUnit: '米'
    }];

    //-----------处理函数------------
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

    $scope.rangeDayType = function() {
        $scope.rangetype = {
            day: 'active'
        };

        $scope.rangelist = [{
            no: 1,
            img: 'http://su.bdimg.com/static/superplus/img/logo_white_ee663702.png',
            name: 'aa',
            score: 86,
            dis: 100,
            disUnit: '米'
        }];
    };
    $scope.rangeMonthType = function() {
        $scope.rangetype = {
            month: 'active'
        };

        $scope.rangelist = [{
            no: 2,
            img: '',
            name: 'aa',
            score: 86,
            dis: 100,
            disUnit: '米'
        }];
    };
    $scope.rangeSeasonType = function() {
        $scope.rangetype = {
            season: 'active'
        };

        $scope.rangelist = [{
            no: 3,
            img: '',
            name: 'aa',
            score: 86,
            dis: 100,
            disUnit: '米'
        }];
    };
    $scope.rangeYearType = function() {
        $scope.rangetype = {
            year: 'active'
        };

        $scope.rangelist = [{
            no: 4,
            img: '',
            name: 'aa',
            score: 86,
            dis: 100,
            disUnit: '米'
        }];
    };

    $scope.sharetoweixin = function() {
        alert('sharetoweixin');
    };
});