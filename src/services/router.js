import Vue from 'vue';
import VueRouter from 'vue-router';

import G from 'constants';

import Home from 'containers/home';
import Login from 'containers/login';
import Register from 'containers/register';

import UserContainer from 'components/contains/user';
import User from 'containers/user';

// otherwise
import Contact from 'containers/otherwise/contact';
import Declaration from 'containers/otherwise/declaration';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Vue.extend(Home) },
	{ path: '/home', component: Vue.extend(Home) },
	{ path: '/contact', component: Vue.extend(Contact) },
	{ path: '/declaration', component: Vue.extend(Declaration) },
	{ path: '/register', component: Vue.extend(Register) },
	{ path: '/login', component: Vue.extend(Login) }, {
		path: '/user',
		component: Vue.extend(UserContainer),
		children: [
			{ path: 'dashboard', component: Vue.extend(User.Dashboard) },
			{ path: 'nodes', component: Vue.extend(User.Nodes) },
		]
	}
];

const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
	G.showMenu = false;
	next();
});

// router.redirect({ '*': '/' });

export default router;
