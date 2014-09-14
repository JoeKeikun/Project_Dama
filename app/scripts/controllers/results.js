'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('ResultsCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {

        /**---------- 交互数据 ------------**/
        $scope.activetab = {
            results: 'active'
        };

        // 时间
        var date = new Date();
        $scope.today = (date.getMonth() + 1) + '月' + date.getDate() + '日';

        // 分数圆形进度条
        $scope.scorecur = 27; // 当前值
        $scope.scoremax = 100; // 最大值
        $scope.scorevalue = 86; // 得分
        $scope.scorewinner = 70; // 击败人数百分比

        // 经验圆形进度条
        $scope.expcur = 17; // 当前值
        $scope.expmax = 100; // 最大值
        $scope.expvalue = 86; // 经验值

        // 指示条
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

        $scope.sharetoweixin = function() {
            window.alert('sharetoweixin');
            $scope.exercises[3].percent = 10;
            $scope.exercises[3].value = 10;
        };

        $scope.sharetoqzone = function() {
            window.alert('sharetoqzone');
            $scope.exercises[3].percent = 80;
            $scope.exercises[3].value = 31;
        };


        $scope.$watchCollection('[max, stroke, radius, isSemi, currentColor, bgColor]', function() {
            $rootScope.$broadcast('renderCircle');
        });

    }
]);