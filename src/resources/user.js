/**
 * 注册用户
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-11-17 22:13:05
 */

import ResourceGenerator from 'resources/generator';

const list = ResourceGenerator('/api/users');
const activate = ResourceGenerator('/api/users/{userID}/activate');

export default { list, activate };
