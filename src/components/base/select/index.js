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
		change: Function,
		width: {
			type: String,
			default: '100px'
		}
	},

	data() {
		return {
			opened: false,
			text: '',
			optsBoxStyle: {
				visibility: 'hidden',
				// height: 0
			}
		};
	},

	mounted() {
		this.getText(this.value);
		this.getOptsBoxHeight();
		this.optsBoxStyle.height = '0px';
		delete this.optsBoxStyle.visibility;
	},

	beforeDestroy() {
		clearTimeout(this.timer);
	},

	methods: {
		toggle() {
			this.opened = !this.opened;

			this.opened ? this.open() : this.close();
		},

		open() {
			clearTimeout(this.timer);

			this.opened = true;
			this.optsBoxStyle.height = this.optsBoxHeight + 'px';
			this.optsBoxStyle.border = '1px solid #eee';
		},

		close() {
			clearTimeout(this.timer);

			this.opened = false;
			this.optsBoxStyle.height = '0px';

			this.timer = setTimeout(() => {
				this.optsBoxStyle = {
					height: '0px',
					border: 'none'
				};
			}, 300);
		},

		select(value) {
			this.close();
			if (value === this.value) return;

			if (this.change) {
				this.change(value);
			}

			this.$emit('input', value);
			this.getText(value);
		},

		getText(value) {
			const activeOpt = this.$children.find(option => option.value === value);

			if (!activeOpt) return '';

			const slot = activeOpt.$slots.default[0];
			const text = slot ? slot.text : '';

			this.text = text;
		},

		getOptsBoxHeight() {
			const optsBox = this.$refs.optionsBox;
			// 2px border
			this.optsBoxHeight = optsBox.offsetHeight + 2;
		}
	}
});


Vue.component('pk-option', {
	template: `
    <div class="pk-option" v-bind:class="{active:isActive}" v-on:click="select()">
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
			this.$parent.select(this.value);
		}
	}
});
