/**
 * 主页面
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 23:26:01
 */

import './index.scss';
import template from './index.html';

import 'components/base/head-menu';
import Resources from 'resources/index';
import Dialog from 'services/dialog';

export default {
	template,
	data() {
		const account = { email: '' };
		return { account };
	},
	created() {
		Resources.account.check.get().then(response => {
			this.account = response.result;
			// console.log(this.account);
		}).catch(error => Dialog.alert(error.message));
	}
};
