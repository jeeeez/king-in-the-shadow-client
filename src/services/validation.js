/**
 * 验证器
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-10-09 09:44:36
 */

const patternURL = new RegExp('^(https?:\\/\\/)?' + // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
	'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

const validation = {
	empty: message => message === '' || message === null || message === undefined,
	authCode: code => /^\d{4}$/.test(code),
	phoneNumber: phoneNumber => /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(phoneNumber),
	email: email => /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email),
	URL: str => patternURL.test(str),
	invitationCode: str => /[0-9a-zA-Z]{8}/.test(str),
	password: str => /^[\S]{6,12}$/.test(str),
	VPNAuth: str => /^[0-9a-zA-Z]{4,10}$/.test(str)
};

export default validation;
