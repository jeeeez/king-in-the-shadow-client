/**
 * 用户登录验证
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-09-18 22:14:18
 */

import G from 'constants';
import Dialog from 'services/dialog';
import router from 'services/router';
import AccountService from 'services/stores/account';

/**
 * 判断当前是否为登录状态
 * @return {Boolean} true:登录状态,false:非登录状态
 */
function accoutAuth() {
	return G.account && G.account.id && true;
}


/**
 * 判断角色是否为管理员
 */
function isAdmin(role) {
	return role === G.ROLES.ADMIN || role === G.ROLES.SUPERADMIN;
}

/**
 * 判断当前登录账号是否为管理员
 * @return {Boolean} true:登录状态,false:非登录状态
 */
function adminAccountAuth() {
	return G.account && G.account.role && isAdmin(G.account.role);
}


export default {
	// 普通用户页面验证
	beforeUserRouteEnter(to, ofrom, next) {
			if (accoutAuth()) return next();

			AccountService.get().then(account => {
				if (account && account.id) {
					next();
				} else {
					router.replace({ name: 'login' });
				}
			}).catch(error => Dialog.alert(error.message));
		},

		// 管理员页面验证
		beforeAdminRouteEnter(to, ofrom, next) {
			if (adminAccountAuth()) return next();

			AccountService.get().then(account => {
				if (!account || !account.id) {
					return router.replace({ name: 'login' });
				}
				if (!isAdmin(account.role)) {
					router.replace({ name: 'user.profile' });
				} else {
					next();
				}
			}).catch(error => Dialog.alert(error.message));
		}
};
