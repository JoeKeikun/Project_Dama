'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('ResultsCtrl', function($scope) {
    $scope.activetab = {
        results: 'active'
    };

    var date = new Date();
    $scope.today = (date.getMonth() + 1) + '月' + date.getDate() + '日';

    $scope.exercises = [{
        title: '消耗热量:',
        evaluation: '良好',
        progresstype: 'type1',
        percent: 30,
        value: 1000,
        unit: '焦'
    }, {
        title: '运动时长:',
        evaluation: '饱满',
        progresstype: 'type2',
        percent: 20,
        value: 120,
        unit: '分钟'
    }, {
        title: '力度:',
        evaluation: '良好',
        progresstype: 'type3',
        percent: 40,
        value: 13,
        unit: '次震动'
    }, {
        title: '幅度:',
        evaluation: '一般',
        progresstype: 'type4',
        percent: 10,
        value: 10,
        unit: '次闪烁'
    }];

    //-----------处理函数------------
    $scope.sharetoweixin = function() {
        alert('sharetoweixin');
    };

    $scope.sharetoqzone = function() {
        alert('sharetoqzone');
        $scope.exercises[3].percent = 80;
        $scope.exercises[3].value = 31;
    };
});