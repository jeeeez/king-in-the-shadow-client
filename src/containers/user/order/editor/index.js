import './index.scss';
import template from './index.html';

// import G from 'constants';
import Resources from 'resources';
import Dialog from 'services/dialog';

// 订单状态 0:未付款 1:已付款 2:过期 100:已删除

export default {
	template,
	data() {
		return {
			isFetching: false,
			stepIndex: 0,
			plans: undefined, // 套餐列表
			order: {}
		};
	},

	mounted() {
		this.isFetching = true;
		Promise.all([
			this.fetchOrderInfo(),
			this.fetchPlanList()
		]).then(() => {
			this.isFetching = false;

			if (!this.plans.length) return;

			if (!this.order.planID) {
				this.order = {
					...this.order,
					planID: this.plans[0].id
				};
				return;
			}

			// 如果当前套餐列表中无订单所对应的套餐，则置空
			const hit = !!this.plans.find(item => item.id === this.order.planID);
			if (!hit) {
				this.order = {
					...this.order,
					planID: undefined
				};
			}

		}).catch(error => {
			Dialog.alert(error.message);
			this.isFetching = false;
		});
	},

	methods: {
		fetchOrderInfo() {
			if (!this.No) {
				return Promise.resolve(this.order);
			}
			return Resources.order.order.get({ No: this.No }).then(data => {
				this.order = data.result;
			});
		},

		fetchPlanList() {
			return Resources.plan.plans.query().then(data => {
				this.plans = data.result;
			});
		},

		// 选择套餐
		selectPlan(plan) {
			this.order = {
				...this.order,
				planID: plan.id
			};
		},

		// 选择套餐的下一步
		checkPlan() {
			if (!this.order.planID) {
				return;
			}
			this.stepIndex += 1;
		},

		generateOrder() {
			console.log('生成订单');
			this.stepIndex += 1;
		}
	},

	computed: {}
};
