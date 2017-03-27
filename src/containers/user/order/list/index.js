import './index.scss';
import template from './index.html';

import G from 'constants';
// import Validation from 'services/validation';
import Resources from 'resources';
import Dialog from 'services/dialog';

// 订单状态 0:未付款 1:已付款 2:过期 100:已删除

export default {
	template,
	data() {
		return {
			isFetching: false,
			account: G.account,
			orders: undefined, // 订单列表
			plans: {} // 套餐列表
		};
	},

	mounted() {
		this.isFetching = true;
		Promise.all([
			this.fetchOrderList(),
			this.fetchPlanList()
		]).then(() => {
			this.isFetching = false;
			this.orders = this.orders.map(order => {
				order.plan = this.plans[order.planID] || {};
				return order;
			});
		}).catch(error => {
			Dialog.alert(error.message);
			this.isFetching = false;
		});
	},

	methods: {
		fetchOrderList() {
			return Resources.order.userOrders.query({ userID: G.account.id }).then(data => {
				this.orders = data.result.filter(order => order.state !== 100);
			});
		},

		fetchPlanList() {
			return Resources.plan.plans.query().then(data => {
				this.plans = data.result.reduce((p, c) => {
					p[c.id] = c;
					return p;
				}, {});
			});
		}
	},

	computed: {
		// 总订单个数
		totalOrderCount() {
			return this.orders ? this.orders.length : '--';
		},
		// 未付款订单个数
		unpaiedOrderCount() {
			return this.orders ? this.orders.filter(item => item.state === 0).length : '--';
		},
		// 已付款订单个数
		paiedOrderCount() {
			return this.orders ? this.orders.filter(item => item.state === 1).length : '--';
		},
		// 已过期订单个数
		outOfDateOrderCount() {
			return this.orders ? this.orders.filter(item => item.state === 2).length : '--';
		}
	}
};
