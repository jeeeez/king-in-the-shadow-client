import ResourceGenerator from 'resources/generator';

// const user = ResourceGenerator('mock/user.json');
// const register = ResourceGenerator('/api/account/register');
// const login = ResourceGenerator('/api/account/login');

// const check = ResourceGenerator('/api/account/check');

export default {
	register: ResourceGenerator('/api/account/register'),
	login: ResourceGenerator('/api/account/login'),
	// 查看当前用户的登录状态
	check: ResourceGenerator('/api/account/check'),
	// 登出
	logout: ResourceGenerator('/api/account/logout'),

  update: ResourceGenerator('/api/account/update'),

  // 消费激活码
  activate: ResourceGenerator('/api/account/activate')
};
