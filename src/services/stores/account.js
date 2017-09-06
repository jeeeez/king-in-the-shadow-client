/**
 * 当前用户信息
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-10-19 22:47:46
 */

import G from 'constants';
import router from 'services/router';
import Resources from 'resources/index';

// ajax 请求集合
const Requests = {
	accountCheck: undefined
};


export default {
	/**
	 * 项目中存在同时发出2次该请求的场景
	 * 所以在外层声明一个集合用于保存请求体
	 * 确保在第一次请求结束之前始终返回当前请求体
	 */
	get: (refresh = false) => {
		if (G.account.id && !refresh) return Promise.resolve(G.account);

		if (Requests.accountCheck) {
			return Requests.accountCheck;
		}

		return Requests.accountCheck = Resources.account.check.get().then(response => {
			if (response.result && response.result.id) {
        G.account = response.result;
        G.account.isAvailable = response.result.expireDate > response.time;
			}
			return response.result;
		}).finally(() => {
			Requests.accountCheck = undefined;
		});
	},

	logout: () => {
		return Resources.account.logout.save().then(() => {
			G.account = {};
			router.push({ name: 'home' });
		});
	}
};
