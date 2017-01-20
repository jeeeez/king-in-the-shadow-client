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
				return formData.errorMessage = '新的登录密码不能为空！';
			if (!Validation.password(formData.password))
				return formData.errorMessage = '新登录密码长度必须为6-12位字符';
			if (formData.password !== formData.confirmPSW)
				return formData.errorMessage = '两次新登录密码不一致！';
			if (Validation.empty(formData.accountPSW))
				return formData.errorMessage = '原登录密码不能为空';
			if (!Validation.password(formData.accountPSW))
				return formData.errorMessage = '原登录密码长度为6-12位字符';

			formData.errorMessage = '';
			formData.isSaveing = true;

			Resources.account.update.update({
				password: formData.accountPSW,
				newPassword: formData.password
			}).then(() => {
				formData.isSaveing = false;
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
