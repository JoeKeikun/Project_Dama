'use strict';

/**
 * @ngdoc function
 * @name damaApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the damaApp
 */
angular.module('damaApp').controller('ChatCtrl', function($scope) {
    /**---------- 测试数据 ------------**/
    var testData1 = [{
        chatId: 0,
        type: 1, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/mr-laoluo@2x.png', 'http://chat.xuxu.in/assets/img/majiajia@2x.png', 'http://chat.xuxu.in/assets/img/williwu@2x.png', 'http://chat.xuxu.in/assets/img/majiajia@2x.png'], // 数组，最多存放四个
        name: '群聊', // 名称
        number: 36, // 个数
        lastSpeak: {
            name: '李美珍',
            content: '呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵  呵呵',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }, {
        chatId: 1,
        type: 0, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/mr-laoluo@2x.png'], // 数组，最多存放四个
        name: '珍尼', // 名称
        number: 2, // 个数
        lastSpeak: {
            name: '珍尼',
            content: '娃娃',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }, {
        chatId: 2,
        type: 1, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/mr-laoluo@2x.png', 'http://chat.xuxu.in/assets/img/majiajia@2x.png'], // 数组，最多存放四个
        name: '群聊', // 名称
        number: 16, // 个数
        lastSpeak: {
            name: '珍尼',
            content: '娃娃',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }, {
        chatId: 3,
        type: 0, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/mr-laoluo@2x.png'], // 数组，最多存放四个
        name: '珍尼', // 名称
        number: 2, // 个数
        lastSpeak: {
            name: '珍尼',
            content: '娃娃',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }, {
        chatId: 4,
        type: 0, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/williwu@2x.png'], // 数组，最多存放四个
        name: '珍尼', // 名称
        number: 2, // 个数
        lastSpeak: {
            name: '珍尼',
            content: '娃娃',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }, {
        chatId: 5,
        type: 0, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/mr-laoluo@2x.png'], // 数组，最多存放四个
        name: '珍尼', // 名称
        number: 2, // 个数
        lastSpeak: {
            name: '珍尼',
            content: '娃娃',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }, {
        chatId: 6,
        type: 0, // 种别，0：个人，1：小组
        img: ['http://chat.xuxu.in/assets/img/williwu@2x.png'], // 数组，最多存放四个
        name: '珍尼', // 名称
        number: 2, // 个数
        lastSpeak: {
            name: '珍尼',
            content: '娃娃',
            time: '2014-9-13 12:30'
        } // 最后一个发表
    }];

    /**---------- 交互数据 ------------**/
    $scope.activetab = {
        chat: 'active'
    };

    $scope.chatlist = testData1;

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