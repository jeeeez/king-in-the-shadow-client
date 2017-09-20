export default function invitationCodeType(type) {
	return {
		YEAR: '年卡',
		SEASON: '季卡',
		MONTH: '月卡',
		WEEK: '周卡',
		DAY: '日卡'
	}[type] || '';
}
