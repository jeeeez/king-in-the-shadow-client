/**
 * 提示组件
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-09-19 23:15:21
 */

import './index.scss';
import template from './index.html';

import Vue from 'vue';


Vue.component('tips', Vue.extend({
	props: ['type', 'message'],
	template
}));
