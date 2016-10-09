/**
 * 顶部导航
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-19 09:43:59
 */
import './index.scss';
import template from './index.html';

import Vue from 'vue';
import Dialog from 'services/dialog';


Vue.component('head-nav-menu', {
	props: ['account'],
	template,
	methods: {
		logout() {
			Dialog.alert('退你妈逼退');
		}
	}
});
