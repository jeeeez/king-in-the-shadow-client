/**
 * 用户页面
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-09-27 21:17:54
 */

import Profile from 'containers/user/profile';
import Nodes from 'containers/user/node/list';
import InvitationCodes from 'containers/user/invitation/code';
import ResetAccountPassword from 'containers/user/reset-account-password';
import ResetVPNPassword from 'containers/user/reset-vpn-password';
import Orders from 'containers/user/order/list';
import OrderEditor from 'containers/user/order/editor';

export default {
	Profile,
	Nodes,
	InvitationCodes,
	ResetAccountPassword,
	ResetVPNPassword,
	Orders,
	OrderEditor
};
