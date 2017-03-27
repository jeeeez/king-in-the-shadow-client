function number(num, fixed = 0) {
	if (num === undefined || num === null) return '';

	num = Number(num).toFixed(fixed);
	let re = /\d{1,3}(?=(\d{3})+$)/g;
	return num.replace(/^(\d+)((\.\d+)?)$/, function(s, s1, s2) {
		return s1.replace(re, '$&,') + s2;
	});
}

export default {
	number,
	currency(num, fixed = 2) {
		return number(num, fixed);
	}
};
