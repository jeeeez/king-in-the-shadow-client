import './index.scss';
import template from './index.html';
import G from 'constants';
import accoutAuth from 'services/account-auth';


export default {
	mixins: [accoutAuth.mixin],
	template,
	data() {
		return { account: G.account };
	}
};
