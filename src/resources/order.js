/**
 * 订单
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-03-27 10:30:52
 */
import ResourceGenerator from 'resources/generator';

const orders = ResourceGenerator('/api/orders');
const userOrders = ResourceGenerator('/api/user/{userID}/orders');
const order = ResourceGenerator('/api/order/{No}');

export default { orders, userOrders, order };
