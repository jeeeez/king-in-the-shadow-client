/**
 * 弹出框
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-10-09 10:51:09
 */

import Vue from 'vue';
import 'components/base/modal';

function entity(config) {
	let _container = document.createElement('section');
	document.body.appendChild(_container);

	const Modal = Vue.extend({
		data() {
			return { show: true, config };
		},
		template: '<pk-modal v-if="show"  :destroy="destroy" :config="config"></pk-modal>',
		methods: {
			destroy() {
				this.show = false;
			}
		}
	});

	return new Modal().$mount(_container);
}


export default {
	entity: options => {
		return entity({ title: '我是一个可爱的Modal层', ...options });
	}
};
