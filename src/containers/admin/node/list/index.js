/**
 * 节点列表
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-09-27 21:17:08
 */

import './index.scss';

import template from './index.html';

import G from 'constants';
import Resources from 'resources';
import Dialog from 'services/dialog';
import Vlidation from 'services/validation';

export default {
	template,
	data() {
		return {
			G,
			nodes: [],
			isFetching: true,
			isCreating: false,
			showNodeEditor: false,
			activeNode: {
				errorMessage: '',
				isSaveing: false
			}
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

		saveNode(evt) {
			evt.preventDefault();
			if (Vlidation.empty(this.activeNode.name)) {
				return this.activeNode.errorMessage = '节点名称不能为空';
			}
			if (Vlidation.empty(this.activeNode.port)) {
				return this.activeNode.errorMessage = '节点IP/域名不能为空';
			}
			this.activeNode.errorMessage = '';

			this.activeNode.isSaveing = true;

			(this.activeNode.id ? Resources.node.update({ nodeId: this.activeNode.id }, this.activeNode) : Resources.nodes.save(this.activeNode)).then(() => {
				this.showNodeEditor = false;
				this.init();
			}).catch(error => {
				this.activeNode.errorMessage = error.message;
			}).finally(() => {
				this.activeNode.isSaveing = false;
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
			this.activeNode = Object.assign({}, node || {
				username: 'root',
				port: 22,
				privateKeyPath: '/root/.ssh/id_rsa',
				protocol: 'rc4-md5'
			});
			this.showNodeEditor = true;
		},

		// 初始化节点
		initialize(node) {
			Dialog.confirm('初始化操作比较慢哟！', () => {
				node.isInitializing = true;
				Resources.initializeNode.save({ nodeId: node.id }, {}).then(() => {
					Dialog.alert('初始化成功！');
				}).catch(error => Dialog.alert(error.message)).finally(() => {
					node.isInitializing = false;
				});
			});
		}
	}
};
