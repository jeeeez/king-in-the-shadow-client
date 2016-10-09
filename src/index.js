/**
 * 应用入口文件
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-19 11:21:54
 */

import 'assets/styles/index.scss';

import Vue from 'vue';
import router from 'services/router';


router.start(Vue.extend({
	template: '<router-view></router-view>'
}), 'app');
