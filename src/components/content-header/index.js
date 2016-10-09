/**
 * 内容头部组件
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-27 21:24:21
 */

import './index.scss';
import template from './index.html';

import Vue from 'vue';


Vue.component('content-header', {
	props: ['title'],
	template
});
