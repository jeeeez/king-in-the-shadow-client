import './index.scss';

import Vue from 'vue';

Vue.component('pk-step', {
	props: {
		// 当前步骤，从0开始。默认值：0
		current: {
			type: Number,
			default: 0
		},
		// 类型，可选：circle,arrow,dot。默认值：circle
		type: {
			type: String,
			default: 'circle'
		},
		// 类名，提供给外部复写样式。默认无
		class: { type: String }
	},
	template: '<div class="pk-step" :class="\'pk-step-\'+type"><slot></slot></div>'
});
