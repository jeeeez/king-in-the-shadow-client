/**
 * 用户登录验证
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 22:14:18
 */

import G from 'constants';
import AccountService from 'services/stores/account';

/**
 * 判断当前是否为登录状态
 * @return {Boolean} true:登录状态,false:非登录状态
 */
const accoutAuth = () => G.account && G.account.id && true;


export default {
	beforeRouteEnter(to, from, next) {
		if (accoutAuth()) return next();

		AccountService.get().then(account => {
			next();
		});
	}
};
