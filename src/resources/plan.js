/**
 * 套餐
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-03-27 11:06:52
 */
import ResourceGenerator from 'resources/generator';

const plans = ResourceGenerator('/api/plans');
const plan = ResourceGenerator('/api/plan/{planId}');

export default { plans, plan };
