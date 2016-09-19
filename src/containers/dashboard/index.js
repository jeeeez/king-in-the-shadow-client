import './index.scss';
import template from './index.html';
import accoutAuth from 'services/account-auth';

export default {
	mixins: [accoutAuth.mixin],
	template
};
