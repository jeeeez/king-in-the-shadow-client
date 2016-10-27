/**
 * 应用入口文件
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-19 11:21:54
 */

import 'assets/styles/index.scss';

import Vue from 'vue';
import router from 'services/router';

import 'services/filters';

import AccountService from 'services/stores/account';
import Dialog from 'services/dialog';
// import G from 'constants';

new Vue({
	router,
	template: '<router-view></router-view>'
}).$mount('app');

// 获取当前用户信息
AccountService.get().catch(error => Dialog.alert(error.message));
