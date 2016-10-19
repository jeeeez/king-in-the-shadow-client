/**
 * 用户登录验证
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 22:14:18
 */

/**
 * 判断当前是否为登录状态
 * @return {Boolean} true:登录状态,false:非登录状态
 */
const accoutAuth = () => true;

/**
 * 提供 mixin 对象以供直接在 component 中使用
 * 如果 component 中含有的 canActivate 钩子函数，则会覆盖该 mixin 函数，而不是 merge
 */
accoutAuth.mixin = {
	route: {
		canActivate: transition => {
			return accoutAuth();
		}
	}
};

export default accoutAuth;
