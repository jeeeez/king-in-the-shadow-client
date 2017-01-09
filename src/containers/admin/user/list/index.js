/**
 * 用户列表
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-11-17 21:23:02
 */

import './index.scss';
import 'components/content-header';

import 'components/base/modal';

import template from './index.html';

import G from 'constants';
import Resources from 'resources';
import Dialog from 'services/dialog';
// import Modal from 'services/modal';

// import '../info/index.js';

export default {
	template,
	data() {
		return {
			G,
			users: [],
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
			Resources.users.query().then(data => {
				this.users = data.result;
			}).catch(error => {
				Dialog.alert(error.message);
			}).finally(() => {
				this.isFetching = false;
			});
		}
	},

	computed: {
		newAmount() {
			return this.users.filter(user => {
				return user.createDate > new Date(new Date().toLocaleDateString()).getTime();
			}).length;
		}
	}
};
