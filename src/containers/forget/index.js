import './index.scss';
import template from './index.html';

// import G from 'constants';
import Resources from 'resources';
import Validation from 'services/validation';
import Dialog from 'services/dialog';
import router from 'services/router';
// import StoreService from 'services/store';

export default {
	template,
	data: () => {
		return {
			errorMessage: '',
			email: '',
			retrieveCode: '',
			password: '',
			isFetchingAuthCode: false,
			countDown: 0, // 获取验证码倒计时
			isSaving: false
		};
	},
	methods: {
		getAuthCode(e) {
			e.preventDefault();
			// 数据验证
			if (Validation.empty(this.email))
				return this.errorMessage = '邮箱不能为空！';

			if (!Validation.email(this.email))
				return this.errorMessage = '邮箱格式不正确！';

			this.errorMessage = '';
			this.isFetchingAuthCode = true;
			Resources.account.forgetPassword.save({ email: this.email }).then(response => {
				Dialog.alert('验证码已发送至您的邮箱，请注意查收！');
				this.isFetchingAuthCode = false;
			}).catch(error => {
				Dialog.alert(error.message);
				this.isFetchingAuthCode = false;
			});
		},
		save(e) {
			e.preventDefault();

			// 数据验证
			if (Validation.empty(this.email))
				return this.errorMessage = '邮箱不能为空！';

			if (!Validation.email(this.email))
				return this.errorMessage = '邮箱格式不正确！';

			if (Validation.empty(this.retrieveCode))
				return this.errorMessage = '邮箱验证码不能为空！';

			if (!/^\S{6}$/.test(this.retrieveCode))
				return this.errorMessage = '邮箱验证码格式不对！';

			if (Validation.empty(this.password))
				return this.errorMessage = '新密码不能为空！';

			if (this.password.length < 6)
				return this.errorMessage = '新密码长度不能小于六位！';

			this.errorMessage = '';
			this.isSaving = true;
			Resources.account.resetPassword.save({ email: this.email, password: this.password, retrieveCode: this.retrieveCode }).then(response => {
        this.isSaving = false;
        Dialog.alert('密码重置成功', function() {
					router.push({ name: 'login' });
				});
			}).catch(error => {
				Dialog.alert(error.message);
				this.isSaving = false;
			});
		}
	}
};
