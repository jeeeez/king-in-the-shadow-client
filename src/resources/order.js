/**
 * 订单
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-03-27 10:30:52
 */
import ResourceGenerator from 'resources/generator';

const orders = ResourceGenerator('/api/orders');
const userOrders = ResourceGenerator('/api/users/{userID}/orders');
const order = ResourceGenerator('/api/orders/{No}');
const payment = ResourceGenerator('api/orders/{No}/payment');

export default { orders, userOrders, order, payment };
