import './index.scss';
import template from './index.html';

import G from 'constants';
import router from 'services/router';
import Validation from 'services/validation';
import Resources from 'resources';
import Dialog from 'services/dialog';

export default {
	template,
	data() {
		return {
			account: G.account,
			formData: { password: '', confirmPSW: '', accountPSW: '', isSaveing: false, errorMessage: '' }
		};
	},

	methods: {
		save(event) {
			event.preventDefault();
			const formData = this.formData;

			// 数据验证
			if (Validation.empty(formData.password))
				return formData.errorMessage = '新VPN密码不能为空！';
			if (!Validation.VPNAuth(formData.password))
				return formData.errorMessage = 'VPN密码只能为4-10位的数字字母组合！';
			if (formData.password !== formData.confirmPSW)
				return formData.errorMessage = '两次新VPN密码不一致！';
			if (Validation.empty(formData.accountPSW))
				return formData.errorMessage = '登录密码不能为空';
			if (!Validation.password(formData.accountPSW))
				return formData.errorMessage = '登录密码长度为6-12位字符';

			formData.errorMessage = '';
			formData.isSaveing = true;

			Resources.account.update.update({
				password: formData.accountPSW,
				newAuth: formData.password
			}).then(() => {
				formData.isSaveing = false;
				G.account.auth = formData.password;
				Dialog.alert('密码修改成功！', () => {
					router.push('./profile');
				});
			}).catch(error => {
				Dialog.alert(error.message);
				formData.isSaveing = false;
			});
		}
	}
};
