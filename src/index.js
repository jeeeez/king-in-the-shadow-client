/**
 * 应用入口文件
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-09-19 11:21:54
 */

import 'assets/styles/index.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from 'containers/home';
import Dashboard from 'containers/dashboard';
import Login from 'containers/login';

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
	'/': { component: Vue.extend(Home) },
	'/login': { component: Vue.extend(Login) },
	'/dashboard': { component: Vue.extend(Dashboard) }
});

router.redirect({ '*': '/' });

router.start(Vue.extend({
	template: '<router-view></router-view>'
}), 'app');
