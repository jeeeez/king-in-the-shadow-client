import Vue from 'vue';
import VueRouter from 'vue-router';

import G from 'constants';
import accoutAuth from 'services/account-auth';

import Home from 'containers/home';
import Login from 'containers/login';
import Register from 'containers/register';

import UserContainer from 'components/contains/user';
import User from 'containers/user';

import AdminContainer from 'components/contains/admin';
import Admin from 'containers/admin';

// otherwise
import Contact from 'containers/otherwise/contact';
import Declaration from 'containers/otherwise/declaration';

Vue.use(VueRouter);

const routes = [
	{ name: 'home', path: '/', component: Vue.extend(Home) },
	{ name: 'contact', path: '/contact', component: Vue.extend(Contact) },
	{ name: 'declaration', path: '/declaration', component: Vue.extend(Declaration) },
	{ name: 'register', path: '/register', component: Vue.extend(Register) },
	{ name: 'login', path: '/login', component: Vue.extend(Login) }, {
		path: '/user',
		component: Vue.extend(UserContainer),
		children: [
			{ name: 'user.profile', path: 'profile', component: Vue.extend(User.Profile), beforeEnter: accoutAuth.beforeRouteEnter }, // , beforeEnter: accoutAuth.mixin.beforeRouteEnter
			{ name: 'user.nodes', path: 'nodes', component: Vue.extend(User.Nodes), beforeEnter: accoutAuth.beforeRouteEnter },
			{ name: 'user.invitationCodes', path: 'invitation/codes', component: User.InvitationCodes, beforeEnter: accoutAuth.beforeRouteEnter }
		]
	}, {
		path: '/admin',
		component: Vue.extend(AdminContainer),
		children: [
			{ name: 'admin.profile', path: 'profile', component: Vue.extend(User.Profile), beforeEnter: accoutAuth.beforeRouteEnter },
			{ name: 'admin.nodes', path: 'nodes', component: Vue.extend(Admin.Nodes), beforeEnter: accoutAuth.beforeAdminRouteEnter },
			{ name: 'admin.users', path: 'users', component: Vue.extend(Admin.Users), beforeEnter: accoutAuth.beforeAdminRouteEnter },
			{ name: 'admin.invitationCodes', path: 'invitation/codes', component: User.InvitationCodes, beforeEnter: accoutAuth.beforeRouteEnter }
		]
	},
	{ path: '*', redirect: '/' }
];

const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
	G.showMainMenu = false;
	G.showUserMenu = false;
	next();
});

export default router;
