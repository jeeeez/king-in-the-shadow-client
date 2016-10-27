/**
 * 今日邀请码列表
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-10-27 22:46:10
 */

import './index.scss';
import 'components/content-header';

import template from './index.html';

import Resources from 'resources';
import Dialog from 'services/dialog';

export default {
	template,
	data() {
		return { codes: [], isFetching: true };
	},
	mounted() {
		Resources.invitation.codes.query().then(data => {
			this.codes = data.result;
		}).catch(error => {
			Dialog.alert(error.message);
		}).finally(() => {
			this.isFetching = false;
		});
	},

	methods: {

	}
};
