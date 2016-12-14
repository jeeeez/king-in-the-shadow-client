/**
 * 按钮组件
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-09-20 09:28:16
 */

import './index.scss';
import template from './index.html';

import Vue from 'vue';


Vue.component('pk-button', {
	props: ['text', 'isLoading'],
	template
});
