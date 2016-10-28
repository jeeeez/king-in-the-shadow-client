export default {
	website: {
		title: '非匠',
		logo: require('assets/logo.png')
	},
	/**
	 * 当前登录用户信息，可由如下三个地方设置
	 * 1、登录页面（登录成功本地化存储用户数据）
	 * 2、注册页面（注册成功自动完成登录操作）
	 * 3、程序初始化时会做一次用户会话检查，在 src/index.js 中
	 * 但是设置 account 信息的脚本在 src/services/store/account.js 中
	 */
	account: {},
	// 首页菜单显示标识
	showMainMenu: false,
	// 用户菜单显示标识
	showUserMenu: false,
	// 管理员菜单显示标识
	showAdminMenu: false,
	defaultAvatar: require('assets/logo.png')
};
