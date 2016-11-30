/**
 * 主页面
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-18 23:26:01
 */

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

import './index.scss';
import template from './index.html';

import 'components/base/head-menu';
import G from 'constants';

export default {
	template,
	data() {
		const account = G.account || {};
		return { account };
	},
	created() {

		setTimeout(() => {
			const swiper = new Swiper('.swiper-container', {
				// Optional parameters
				// direction: 'vertical',
				loop: true,
				// autoplay: 5000,

				// If we need pagination
				pagination: '.swiper-pagination',
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflow: {
					rotate: 0,
					stretch: 262,
					depth: 500,
					modifier: 1,
					slideShadows: false
				},

				// Navigation arrows
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',

				// And if we need scrollbar
				// scrollbar: '.swiper-scrollbar',
			});
			console.log(swiper);
		}, 200);
	}
};
