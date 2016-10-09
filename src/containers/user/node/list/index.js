/**
 * 节点列表
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-27 21:17:08
 */

import './index.scss';
import 'components/content-header';

import template from './index.html';

import Resources from 'resources';
import Dialog from 'services/dialog';

export default {
	template,
	data() {
		return { nodes: [] };
	},
	created() {
		Resources.nodes.query().then(nodes => {
			console.log(this.nodes.length);
			this.nodes = nodes;
			console.log(this.nodes);
		}).catch(error => {
			Dialog.alert(error.message);
		});
	}
};
