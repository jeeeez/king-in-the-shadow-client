import Vue from 'vue';
import VueResource from 'vue-resource';

import G from 'constants';
import StoreService from 'services/store';

Vue.use(VueResource);

// 拦截器
Vue.http.interceptors.push((request, next) => {
	request.headers.append(G.TOKEN_KEY, StoreService.get(G.TOKEN_KEY));
	next();
});

/**
 * get => get
 * save => post
 * query => get
 * update => put
 * remove => ...
 * delete => delete
 */
const generator = (...props) => {
	const resource = Vue.resource(...props);
	Object.keys(resource).map(method => {
		// 为 resource 的执行方法做一层数据过滤
		const __method = resource[method];
		resource[method] = (...opts) => {
			return __method(...opts).then(successHandle, errorHandle);
		};
	});
	return resource;
};

const successHandle = response => {
	if (response.ok) {
		return response.json();
	} else {
		return errorHandle(response);
	}
};
const errorHandle = response => {
	try {
		return response.json().then(result => Promise.reject(result));
	} catch (error) {
		throw new window.Error(response.statusText);
	}
};


export default generator;
