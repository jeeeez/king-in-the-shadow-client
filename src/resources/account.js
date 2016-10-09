import ResourceGenerator from 'resources/generator';

// const user = ResourceGenerator('mock/user.json');
const register = ResourceGenerator('/api/account/register');
const login = ResourceGenerator('/api/account/login');

// 查看当前用户的登录状态
const check = ResourceGenerator('/api/account/check');

export default {
	register,
	login,
	check
};
