/**
 * 用户注册
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-10-08 23:12:59
 */
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
		return {
			errorMessage: '',
			email: '',
			password: '',
			invitationCode: '',
			isRegister: false
		};
	},
	methods: {
		register(e) {
			e.preventDefault();

			// 数据验证
			if (Validation.empty(this.email))
				return this.errorMessage = '邮箱不能为空！';
			if (!Validation.email(this.email))
				return this.errorMessage = '邮箱格式不正确！';
			if (Validation.empty(this.password))
				return this.errorMessage = '密码不能为空！';
			if (this.password.length < 6)
				return this.errorMessage = '密码长度不能小于六位！';
			// if (Validation.empty(this.invitationCode))
			// 	return this.errorMessage = '邀请码不能为空';
			// if (!Validation.invitationCode(this.invitationCode))
			// 	return this.errorMessage = '邀请码为8位数字+字母组合';

			this.errorMessage = '';
			this.isRegister = true;
			Resources.account.register.save({
				email: this.email,
				password: this.password // ,
					// invitationCode: this.invitationCode
			}).then(response => {
				G.account = response.result;
				this.isRegister = false;
				router.push('user/profile');
			}).catch(error => {
				Dialog.alert(error.message);
				this.isRegister = false;
			});
		}
	}
};
