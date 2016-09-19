import './index.scss';
import template from './index.html';

import 'components/tips';

export default {
	template,
	data: () => {
		return { errorMessage: '' };
	},
	methods: {
		login(e) {
			e.preventDefault();
			this.errorMessage = '该邮箱未注册！';
		}
	}
};
