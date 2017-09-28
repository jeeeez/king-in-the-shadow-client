/**
 * 用户列表
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-11-17 21:23:02
 */

import './index.scss';

import template from './index.html';

import G from 'constants';
import Resources from 'resources';
import Dialog from 'services/dialog';
// import Modal from 'services/modal';

// import '../info/index.js';

export default {
	template,
	data() {
		return {
			G,
			users: [],
			isFetching: true,
			currentDate: 0,
			showActivateModal: false
		};
	},
	mounted() {
		this.init();
	},

	methods: {
		init() {
			this.fetchUserList();
		},

		fetchUserList() {
			this.isFetching = true;
			Resources.users.list.query().then(data => {
				this.users = data.result.sort((user1, user2) => {
					return user2.createDate - user1.createDate;
				}).map(user => {
					user.activateDays = '366';
					return user;
				});
				this.currentDate = data.time;
			}).catch(error => {
				Dialog.alert(error.message);
			}).finally(() => {
				this.isFetching = false;
			});
		},

		// 为某个用户延长时间
		activate(user) {
			if (this.isActivating) return;

			Dialog.confirm(`确定为用户 ${user.email} 延长 ${user.activateDays} 天服务？`, function() {

				this.isActivating = true;
				return Resources.users.activate.save({ userID: user.id }, { days: user.activateDays })
					.then(response => {
						user.expireDate = response.result.expireDate;
						console.log(new Date(user.expireDate));

					}).catch(error => {
						Dialog.alert(error.message);
					}).finally(() => {
						this.isActivating = false;
					});
			});
		}
	},

	computed: {
		// 当日新增的用户
		increasedUsers() {
			return this.users.filter(user => {
				return user.createDate > new Date(new Date().toLocaleDateString()).getTime();
			});
		},
		// 当日新增且已验证邮箱的用户
		increasedValidatedUsers() {
			return this.users.filter(user => {
				return user.validated && user.createDate > new Date(new Date().toLocaleDateString()).getTime();
			});
		}
	}
};
