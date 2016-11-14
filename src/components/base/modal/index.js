/**
 * 弹出层 Modal
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-11-14 22:09:45
 */

import './index.scss';
import template from './index.html';

import Vue from 'vue';

Vue.component('pk-modal', {
	template,
	props: {
		config: { type: Object, required: true },
		destroy: { type: Function, required: true },
		beforeClose: { type: Function } // must be a promise function
	},
	data() {
		return { className: this.config.type + (this.config.className ? ' ' + this.config.className : '') };
	},
	methods: {
		close() {
			const beforeClose = this.beforeClose || Promise.resolve;

			return beforeClose().then(result => {
				this.destroy();
				return result;
			});
		},
		clickMask(event) {
			event.preventDefault();
			if (this.clickMaskToClose) {
				this.close();
			}
		}
	}
});
