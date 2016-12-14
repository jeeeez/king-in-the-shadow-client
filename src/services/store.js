/**
 * localStorage
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-11-22 20:51:23
 */

const store = {
	get: key => {
		const result = window.localStorage.getItem(key);
		try {
			const keyValue = JSON.parse(result);
			const type = keyValue.type;
			const expire = keyValue.expire;
			const date = keyValue.date;

			if (!type) return result;


			// 数据过期
			if (expire && date && ((date + expire) < +new Date())) {
				store.remove(key);
				return null;
			}

			return keyValue.data;
		} catch (error) {
			return result;
		}
	},

	/**
	 * 设置本地存储的值
	 * @param  {string} key    [键]
	 * @param  {any}        value  [值]
	 * @param  {int}        expire [有效时间]
	 */
	set: (key, value, expire) => {
		// 其实`type`没什么作用，占个位置
		// 确保保存的值是一个`object`类型
		// 方便在取的时候能直接返回对应的数据类型
		const type = typeof value;
		const keyValue = JSON.stringify({ type, data: value, expire, date: +new Date() });
		window.localStorage.setItem(key, keyValue);
	},
	remove: key => {
		window.localStorage.removeItem(key);
	}
};

export default store;
