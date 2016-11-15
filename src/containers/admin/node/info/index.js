/**
 * 节点信息编辑弹出层
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-11-15 10:26:39
 */

import './index.scss';
import template from './index.html';

import 'components/base/tips';
import 'components/base/button';

import Vue from 'vue';
import Resource from 'resources';
import Vlidation from 'services/validation';


Vue.component('node-editor', {
	template,
	props: {
		node: { type: Object, required: true },
		destroy: { type: Function },
		afterSave: { type: Function }
	},
	data() {
		return { isSaveing: false, errorMessage: '' };
	},
	methods: {
		save() {
			if (Vlidation.empty(this.node.name)) {
				return this.errorMessage = '节点名称不能为空';
			}
			if (Vlidation.empty(this.node.port)) {
				return this.errorMessage = '节点IP/域名不能为空';
			}

			this.errorMessage = '';

			this.isSaveing = true;

			(this.node.id ? Resource.node.update({ nodeId: this.node.id }, this.node).then(node => {
				// update node
				this.afterSave && this.afterSave(node, this.node);
			}) : Resource.nodes.save(this.node).then(node => {
				// add node
				this.afterSave && this.afterSave(node, this.node);
			})).catch(error => {
				this.errorMessage = error.message;
			}).finally(() => {
				this.isSaveing = false;
			});
		},
		close() {
			this.destroy();
		}
	}
});
