/**
 * 用户菜单
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-27 16:04:04
 */

import '../index.scss';
import './index.scss';
import template from './index.html';

import G from 'constants';
import Vue from 'vue';
import AccountService from 'services/stores/account';
import Dialog from 'services/dialog';

Vue.component('admin-menu', {
	template,
	data() {
		return { G };
	},
	methods: {
		logout() {
			Dialog.confirm('确定退出当前账号？', () => {
				AccountService.logout().catch(error => Dialog.alert(error.message));
			});
		}
	}
});
