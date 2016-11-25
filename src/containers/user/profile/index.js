import './index.scss';
import template from './index.html';

import G from 'constants';
import Validation from 'services/validation';
import Resources from 'resources';
import Dialog from 'services/dialog';

export default {
	template,
	data() {
		return {
			account: G.account,
			VPNEditorData: { show: false, password: '', confirmPSW: '', accountPSW: '', isSaveing: false, errorMessage: '' },
			PSWEditorData: { show: false, password: '', confirmPSW: '', accountPSW: '', isSaveing: false, errorMessage: '' }
		};
	},

	methods: {
		closeVPNEditor(event) {
			event.preventDefault();
			this.VPNEditorData.show = false;
		},
		closePSWEditor(event) {
			event.preventDefault();
			this.PSWEditorData.show = false;
		},

		// 保存VPN密码
		saveVPNPSW(event) {
			event.preventDefault();

			// 数据验证
			if (Validation.empty(this.VPNEditorData.password))
				return this.VPNEditorData.errorMessage = '新VPN密码不能为空！';
			if (!Validation.VPNAuth(this.VPNEditorData.password))
				return this.VPNEditorData.errorMessage = 'VPN密码只能为4-10位的数字字母组合！';
			if (this.VPNEditorData.password !== this.VPNEditorData.confirmPSW)
				return this.VPNEditorData.errorMessage = '两次新VPN密码不一致！';
			if (Validation.empty(this.VPNEditorData.accountPSW))
				return this.VPNEditorData.errorMessage = '登录密码不能为空';
			if (!Validation.password(this.VPNEditorData.accountPSW))
				return this.VPNEditorData.errorMessage = '登录密码长度为6-12位字符';

			this.VPNEditorData.errorMessage = '';
			this.VPNEditorData.isSaveing = true;

			Resources.account.update.update({
				password: this.VPNEditorData.accountPSW,
				newAuth: this.VPNEditorData.password
			}).then(() => {
				this.VPNEditorData.isSaveing = false;
				this.VPNEditorData.show = false;
				G.account.auth = this.VPNEditorData.password;
			}).catch(error => {
				Dialog.alert(error.message);
				this.VPNEditorData.isSaveing = false;
			});
		},

		// 保存登录密码
		saveAccountPSW(event) {
			event.preventDefault();

			// 数据验证
			if (Validation.empty(this.PSWEditorData.password))
				return this.PSWEditorData.errorMessage = '新的登录密码不能为空！';
			if (!Validation.password(this.PSWEditorData.password))
				return this.PSWEditorData.errorMessage = '新登录密码长度必须为6-12位字符';
			if (this.PSWEditorData.password !== this.PSWEditorData.confirmPSW)
				return this.PSWEditorData.errorMessage = '两次新登录密码不一致！';
			if (Validation.empty(this.PSWEditorData.accountPSW))
				return this.PSWEditorData.errorMessage = '原登录密码不能为空';
			if (!Validation.password(this.PSWEditorData.accountPSW))
				return this.PSWEditorData.errorMessage = '原登录密码长度为6-12位字符';

			this.PSWEditorData.errorMessage = '';
			this.PSWEditorData.isSaveing = true;

			Resources.account.update.update({
				password: this.PSWEditorData.accountPSW,
				newPassword: this.PSWEditorData.password
			}).then(() => {
				this.PSWEditorData.isSaveing = false;
				this.PSWEditorData.show = false;
			}).catch(error => {
				Dialog.alert(error.message);
				this.PSWEditorData.isSaveing = false;
			});
		}
	}
};
