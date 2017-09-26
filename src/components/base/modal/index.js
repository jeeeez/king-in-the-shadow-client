/**
 * 弹出层 Modal
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-11-14 22:09:45
 */

import './index.scss';
import template from './index.html';

import Vue from 'vue';

Vue.component('pk-modal', {
	template,
	props: {
		// config: { type: Object, required: true },
		destroy: { type: Function, required: true },
		title: { type: String },
		innerMask: { type: Boolean },
		beforeClose: { type: Function }, // must be a promise function
		clickMaskToClose: Boolean
	},
	data() {
		return { className: '', visible: true };
	},
	methods: {
		close() {
			const beforeClose = this.beforeClose || Promise.resolve();
      // this.visible = false;
			return beforeClose.then(result => {
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
