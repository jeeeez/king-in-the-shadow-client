import dateFormatter from 'date-formatter/dist/date-formatter';

export default {
	format: (date, format) => {
		return dateFormatter(new Date(date), format);
	}
};
