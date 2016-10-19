import './index.scss';
import template from './index.html';

import 'components/base/tips';
import 'components/base/button';
import 'components/base/head-menu';

import G from 'constants';
import Resources from 'resources';
import Validation from 'services/validation';
import Dialog from 'services/dialog';
import router from 'services/router';

export default {
	template,
	data: () => {
		return { errorMessage: '', email: '450994392@qq.com', password: 'xin5383139', isLogin: false };
	},
	methods: {
		login(e) {
			e.preventDefault();

			// 数据验证
			if (Validation.empty(this.email)) return this.errorMessage = '邮箱不能为空！';
			if (!Validation.email(this.email)) return this.errorMessage = '邮箱格式不正确！';
			if (Validation.empty(this.password)) return this.errorMessage = '密码不能为空！';
			if (this.password.length < 6) return this.errorMessage = '密码长度不能小于六位！';

			this.errorMessage = '';
			this.isLogin = true;
			Resources.account.login.save({ email: this.email, password: this.password }).then(response => {
				G.account = response.result;
				this.isLogin = false;
				router.go('/user/nodes');
			}).catch(error => {
				Dialog.alert(error.message);
				this.isLogin = false;
			});
		}
	}
};
