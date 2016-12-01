/**
 * 用户登录验证
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 22:14:18
 */

import G from 'constants';
import Dialog from 'services/dialog';
import router from 'services/router';
import AccountService from 'services/stores/account';

const ROLE = {
	ADMIN: 'admin',
	USER: 'user'
};

/**
 * 判断当前是否为登录状态
 * @return {Boolean} true:登录状态,false:非登录状态
 */
const accoutAuth = () => G.account && G.account.id && true;

/**
 * 判断当前登录账号是否为管理员
 * @return {Boolean} true:登录状态,false:非登录状态
 */
const adminAccountAuth = () => G.account && G.account.role === ROLE.ADMIN;


export default {
	// 普通用户页面验证
	beforeUserRouteEnter(to, from, next) {
			if (accoutAuth()) return next();

			AccountService.get().then(account => {
				if (account && account.id) {
					next();
				} else {
					router.replace('login');
				}
			}).catch(error => Dialog.alert(error.message));
		},

		// 管理员页面验证
		beforeAdminRouteEnter(to, from, next) {
			if (adminAccountAuth()) return next();

			AccountService.get().then(account => {
				if (!account || !account.id) {
					return router.replace('login');
				}
				if (account.role === ROLE.USER) {
					return router.replace('user.profile');
				}
				if (account.role === ROLE.ADMIN) {
					next();
				}
			}).catch(error => Dialog.alert(error.message));
		}
};
