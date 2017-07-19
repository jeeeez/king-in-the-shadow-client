w/**
 * 顶部导航
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-09-19 09:43:59
 */
import './index.scss';
import template from './index.html';

import Vue from 'vue';

import G from 'constants';
import 'components/base/custom-icon';
import Dialog from 'services/dialog';
import AccountService from 'services/stores/account';


Vue.component('head-nav-menu', {
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
	},
});
