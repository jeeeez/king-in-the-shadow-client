/**
 * 服务器节点
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-10-09 12:54:52
 */
import ResourceGenerator from 'resources/generator';

// const user = ResourceGenerator('mock/user.json');
const nodes = ResourceGenerator('/api/nodes');
const node = ResourceGenerator('/api/node/{nodeId}');
const initializeNode = ResourceGenerator('/api/node/{nodeId}/initialize');

export default node;

export { nodes, initializeNode };
