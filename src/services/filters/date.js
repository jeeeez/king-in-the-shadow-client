import dateFormatter from 'date-formatter/dist/date-formatter';

export default {
	format: (date, format) => {
		return dateFormatter(new Date(date), format);
	}
};

/*eslint-disable*/
Date.prototype.format = function(format) {
	return dateFormatter(this, format);
};
