/**
 * 联系我们
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-10-20 16:33:26
 */

import './index.scss';
import template from './index.html';


import 'components/base/head-menu';
import G from 'constants';

export default {
	template,
	data() {
		const account = G.account || {};
		return { account };
	},
};
