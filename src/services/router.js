import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'containers/home';
import Login from 'containers/login';
import Register from 'containers/register';

import UserContainer from 'components/contains/user';
import User from 'containers/user';

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
	'/': { component: Vue.extend(Home) },
	'/register': { component: Vue.extend(Register) },
	'/login': { component: Vue.extend(Login) },
	'/user': {
		component: Vue.extend(UserContainer),
		subRoutes: {
			'/dashboard': {
				component: Vue.extend(User.Dashboard)
			},
			'/nodes': {
				component: Vue.extend(User.Nodes)
			}
		}
	}
});

router.redirect({ '*': '/' });

export default router;
