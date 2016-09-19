/**
 * 主页面
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 23:26:01
 */

import './index.scss';
import template from './index.html';

import 'components/head-menu';

export default {
	data: () => {
		const account = { email: '450994392@qq.com' };
		return { account };
	},
	template
};
