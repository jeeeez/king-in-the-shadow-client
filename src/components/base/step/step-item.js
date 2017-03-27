import Vue from 'vue';
import template from './step-item.html';

Vue.component('pk-step-item', {
	template,
	props: {
		// 当前步骤状态，不传入可根据外层的Step的current属性，自动生成，可选：wait，process，finish
		status: {
			type: String
		},
		// 标题
		title: {
			type: String
		},
		// 百分比
		percent: {
			type: String
		},
		// 图标，仅限支持的icon
		icon: {
			type: String
		},
		// 内容，用于垂直状态下的内容填充，可以传入string或dom element
		content: {}
	},

	mounted() {},

	computed: {
		// 当前子组件在父组件中的索引值
		index() {
			return this.$parent.$children.findIndex(item => item === this);
		},

		// 标识该组件是否为父组件中最后的子组件
		isLast() {
			// --TODO:不知道有什么更好的办法知道父组件中子组件的个数
			const brothers = this.$parent.$slots.default.filter(vnode => {
				return vnode.tag && vnode.tag.includes('pk-step-item');
			});
			return this.index === brothers.length - 1;
		},

		// 当前步骤的状态
		stepStatus() {
			if (this.status) return this.status;
			const currentActiveIndex = this.$parent.current;
			return this.index < currentActiveIndex ? 'finish' : this.index === currentActiveIndex ? 'process' : 'wait';
		}
	}
});
