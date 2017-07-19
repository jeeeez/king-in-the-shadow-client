/**
 * 主页面
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-09-18 23:26:01
 */

// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';

import './index.scss';
import template from './index.html';

import G from 'constants';

export default {
	template,
	data() {
		return { G, headMenuClassName: '' };
	},
	created() {
		document.addEventListener('scroll', e => {
			this.headMenuClassName = document.body.scrollTop > 200 ? 'wheel' : '';
		});
	},

	computed: {
		// 登录状态下跳转的目标页面
		targetURL() {
			return {
				[G.ROLES.SUPERADMIN]: 'admin/users'
			}[G.account.role] || 'user/profile';
		}
	}
};
