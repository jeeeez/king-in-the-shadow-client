/**
 * 当前用户信息
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-10-19 22:47:46
 */

import G from 'constants';
import Resources from 'resources/index';

export default {
	get: (refresh = false) => {
		if (G.account && !refresh) return Promise.resolve(G.account);

		return Resources.account.check.get().then(response => {
			G.account = response.result;
			return G.account;
		});
	}
};
