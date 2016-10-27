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
		return { nodes: [], isFetching: true };
	},
	mounted() {
		Resources.nodes.query().then(data => {
			this.nodes = data.result;
		}).catch(error => {
			Dialog.alert(error.message);
		}).finally(() => {
			this.isFetching = false;
		});
	},

	methods: {
		showConfigInfo() {
			Dialog.alert('然后点我也并没有什么卵用！');
		},
		showQRCode(node) {
			Dialog.alert(`<h4>使用 Shadowrocket App 扫描下方二维码可自动完成配置</h4><img src="${node.URI}" />`, {
				title: '节点二维码'
			});
		}
	}
};
