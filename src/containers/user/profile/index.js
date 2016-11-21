import './index.scss';
import template from './index.html';
import G from 'constants';
// import accoutAuth from 'services/account-auth';


export default {
	// mixins: [accoutAuth.mixin],
	template,
	data() {
		return {
			account: G.account,
			VPNEditorData: { show: false, password: '', confirmPSW: '', accountPSW: '', isSaveing: false },
			passwordEditorData: { show: false, password: '', confirmPSW: '', accountPSW: '', isSaveing: false }
		};
	},

	methods: {
		closeModal(event) {
			event.preventDefault();
			this.VPNEditorData.show = false;
		},

		// 保存VPN密码
		saveVPNPSW(event) {
			event.preventDefault();
			this.VPNEditorData.isSaveing = true;

			setTimeout(() => {
				this.VPNEditorData.isSaveing = false;
			}, 5000);
		}
	}
};
