/**
 * 弹出框提示
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-10-09 10:00:13
 */

import './index.scss';
import template from './index.html';

import Vue from 'vue';

Vue.component('pk-dialog', {
	template,
	props: {
		config: { type: Object, required: true },
		close: { type: Function, required: true }
	},
	data() {
		return { className: this.config.type + (this.config.className ? ' ' + this.config.className : '') };
	},
	methods: {
		confirm() {
			Promise.resolve(this.config.onConfirm()).then(() => {
				this.config.autoClose && this.close();
			});
		},
		cancel() {
			Promise.resolve(this.config.onCancel()).then(() => {
				this.config.autoClose && this.close();
			});
		}
	}
});
