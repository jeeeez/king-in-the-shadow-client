/**
 * 节点列表
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-27 21:17:08
 */

import './index.scss';
import 'components/content-header';

import 'components/base/modal';

import template from './index.html';

import G from 'constants';
import Resources from 'resources';
import Dialog from 'services/dialog';
// import Modal from 'services/modal';

import '../info/index.js';

export default {
	template,
	data() {
		return {
			G,
			nodes: [],
			isFetching: true,
			isCreating: false,
			showNodeEditor: false
		};
	},
	mounted() {
		this.init();
	},

	methods: {
		init() {
			Resources.nodes.query().then(data => {
				this.nodes = data.result.map(node => {
					node.isInitializing = false;
					return node;
				});
			}).catch(error => {
				Dialog.alert(error.message);
			}).finally(() => {
				this.isFetching = false;
			});
		},
		showQRCode(node) {
			Dialog.alert(`<h4>使用 Shadowrocket App 扫描下方二维码可自动完成配置</h4><img class="ss-qrcode" src="${node.URI}" />`, {
				title: '节点二维码',
				className: 'ss-qrcode-modal'
			});
		},

		/**
		 * 修改或创建节点
		 * 1、如果node为空则创建，如果不为空则修改
		 */
		update(node) {
			this.activeNode = node || {
				username: 'root',
				port: 22,
				privateKeyPath: '/root/.ssh/id_rsa',
				protocol: 'rc4-md5'
			};
			this.showNodeEditor = true;
		},

		// 节点保存成功回调函数
		afterSaveNode(newNode, oldNode) {
			this.showNodeEditor = false;
			this.init();
		},

		// 初始化节点
		initialize(node) {
			node.isInitializing = true;
			Resources.initializeNode.save({ nodeId: node.id }, {}).then(() => {
				Dialog.alert('初始化成功！');
			}).catch(error => Dialog.alert(error.message)).finally(() => {
				node.isInitializing = false;
			});
		}
	}
};
