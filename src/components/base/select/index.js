import './index.scss';

import template from './index.html';
import Vue from 'vue';

Vue.component('pk-select', {
	template,

	props: {
		value: {
			type: String | Number,
			required: true
		},
		disabled: Boolean,
		placeholder: {
			type: String,
			default: '请选择一个选项'
		},
		change: Function
	},

	data() {
		return {
			opened: false
		};
	},

	methods: {
		select(value) {
			if (value === this.value) return;

			this.$emit('input', value);

			if (this.change) {
				this.change(value);
			}
		}
	}
});


Vue.component('pk-option', {
	template: `
    <div class="pk-option" v-bind:class="" v-on:click="select()">
      <slot></slot>
    </div>
  `,
	props: {
		value: {
			type: String | Number | Boolean,
			required: true
		}
	},

	mounted() {},

	computed: {
		isActive() {
			return this.value === this.$parent.value;
		}
	},

	methods: {
		select() {
			console.log(this.value);
			this.$parent.select(this.value);
		}
	}
});
